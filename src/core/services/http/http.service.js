import { Subject, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, finalize, map } from "rxjs/operators";
import StorageService from "../storage";
import { HttpMethod } from "./http.type";

export class HttpService {
  isRequesting$ = new Subject();
  onError$ = new Subject();

  _commonHeader = {
    Accept: "application/json",
    "Cache-Control": "no-cache no-store",
    Pragma: "no-cache",
    Expires: 0,
    "Access-Control-Allow-Origin": "*",
  };

  get(uri, options) {
    return this.request(uri, HttpMethod.GET, options);
  }

  post(uri, options) {
    return this.request(uri, HttpMethod.POST, options);
  }

  put(uri, options) {
    return this.request(uri, HttpMethod.PUT, options);
  }

  delete(uri, options) {
    return this.request(uri, HttpMethod.DELETE, options);
  }

  request(uri, method, options) {
    let url = this.resolveUri(uri);
    const token = StorageService.get("token");
    if (options && options.queryParams) {
      let queryString = "";
      for (const key in options.queryParams) {
        const value = options.queryParams[key];
        if (value !== undefined) {
          if (Array.isArray(value)) {
            value.forEach(v => {
              queryString += `${key}=${v}&`;
            });
          } else {
            queryString += `${key}=${value}&`;
          }
        }
      }
      if (queryString.endsWith("&")) {
        queryString = queryString.substring(0, queryString.length - 1);
      }
      url = url + "?" + queryString;
    }
    this.isRequesting$.next(true);
    return ajax({
      url,
      method,
      ...options,
      headers: {
        ...this._commonHeader,
        Authorization: token ? `Bearer ${token}` : "",
        ...options?.headers,
      },
    }).pipe(
      map(ajaxResponse => this.handleResponse < T > ajaxResponse),
      catchError(error => {
        this.onError$.next(error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.isRequesting$.next(false);
      })
    );
  }

  resolveUri(uri) {
    if (/^(http|https):\/\/.+$/.test(uri)) {
      return uri;
    }
    return `${process.env.REACT_APP_BASE_API_URL}${uri}`;
  }

  handleResponse(ajaxResponse) {
    return ajaxResponse.response;
  }
}

export default new HttpService();

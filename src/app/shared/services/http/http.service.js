import { HttpService } from "@/core/services/http/http.service";
import StorageService from "@/core/services/storage";

class VIUHttpService extends HttpService {
  handleResponse(ajaxResponse) {
    const newToken = ajaxResponse.xhr.getResponseHeader("newtoken");

    if (newToken) {
      StorageService.set("token", newToken);
    }

    if (ajaxResponse.response) {
      const response = ajaxResponse.response;
      if (response) {
        if (response.statusCode === 200) {
          return response;
        } else {
          if (response.message) {
            throw response.message;
          }
        }
      }
    }

    // eslint-disable-next-line no-throw-literal
    throw null;
  }
}

export default new VIUHttpService();

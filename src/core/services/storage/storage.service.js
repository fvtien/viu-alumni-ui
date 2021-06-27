class StorageService {
  prefix = process.env.REACT_APP_NAME || "app";
  localStorage;
  sessionStorage;

  constructor() {
    this.localStorage = window.localStorage;
    this.sessionStorage = window.sessionStorage;
  }

  // Local Storage
  set(key, data) {
    this.localStorage.setItem(this.generateKey(key), data.toString());
  }

  get(key) {
    return this.localStorage.getItem(this.generateKey(key));
  }

  setObject(key, data) {
    this.set(key, JSON.stringify(data));
  }

  getObject(key) {
    const value = this.get(key);
    return value !== null ? JSON.parse(value) : null;
  }

  // Session Storage
  setSession(key, data) {
    this.sessionStorage.setItem(this.generateKey(key), data.toString());
  }

  getSession(key) {
    return this.sessionStorage.getItem(this.generateKey(key));
  }

  setSessionObject(key, data) {
    this.setSession(key, JSON.stringify(data));
  }

  getSessionObject(key) {
    const value = this.getSession(key);
    return value !== null ? JSON.parse(value) : null;
  }

  generateKey(key) {
    return `${this.prefix}_${key}`;
  }
}

export default new StorageService();

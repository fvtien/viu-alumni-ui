import VIUHttpService from "../services/http";

class AppUserAPI {
  login(username, password) {
    return VIUHttpService.post("/user/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: { user_id: username, password },
    });
  }
}

const UserAPI = new AppUserAPI();
export default UserAPI;

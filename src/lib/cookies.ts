
import Cookies from "js-cookie";

const TOKEN_KEY = "autonova_token";

export const cookieService = {
  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  setToken(token: string) {
    Cookies.set(TOKEN_KEY, token, {
      expires: 7,
      sameSite: "strict",
    });
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY);
  },
};

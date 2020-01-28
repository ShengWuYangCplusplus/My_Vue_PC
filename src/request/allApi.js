import { get, post, put, delone } from "../config/httpConfig";

export const apis = {
  updateCurrentPwd(p, head) {
    return post("/api/password", p, head);
  },
  System: {
    getUserList(p) {
      return get("/api/users", p)
    },
    addUser(p) {
      return post("/api/users", p)
    },
    deleteUser(p) {
      return delone("/api/users", p)
    },
  }
}
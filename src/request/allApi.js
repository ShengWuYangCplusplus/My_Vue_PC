import { get, post, put, delone } from "../config/httpConfig";

export const apis = {
  updateCurrentPwd(p, head) {
    return post("/api/password", p, head);
  }
}
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
    getUserDetail(p) {
      return get('/api/users/detail', p)
    },
    updateUser(p) {
      return put('/api/users', p)
    }
  },
  Role: {
    getRoleList(p) {
      return get('/api/role', p)
    }
  },
  Department: {
    getDepartmentList(p) {
      return get('/api/department', p)
    }
  }
}
export const getRoleList = (p) => get('/api/role', p)

export const getDepartmentList = (p) => get('/api/department', p)
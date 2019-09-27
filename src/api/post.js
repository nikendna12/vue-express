import http from "./http";

export default class PostAPI {
  static all() {
    return http.get('/posts')
  }
  static get(id) {
    return http.get(`/posts/${id}`)
  }
  static create(data) {
    return http.post('/posts', data)
  }
  static update(data) {
    return http.put(`/posts/${data.id}`, data)
  }
  static delete(id) {
    return http.delete(`/posts/${id}`)
  }
}
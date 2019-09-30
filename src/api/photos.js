import http from "./http";

export default class PhotosAPI {
  static all() {
    return http.get("/photos");
  }
  static get(id) {
    return http.get(`/photos/${id}`);
  }
  static create(data) {
    return http.post("/photos", data);
  }
  static update(data) {
    return http.put(`/photos/${data.id}`, data);
  }
  static delete(id) {
    return http.delete(`/photos/${id}`);
  }
}

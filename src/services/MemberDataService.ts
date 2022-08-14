import http from "../../http-common";

class MemberDataService {
  getAll(): Promise<any> {
    return http.get("/members");
  }

  get(id: any): Promise<any> {
    return http.get(`/members/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/members", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/members/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/members/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/members`);
  }

  // findByFName(fname: string): Promise<any> {
  //   return http.get(`/members?=${title}`);
  // }
}

export default new MemberDataService();
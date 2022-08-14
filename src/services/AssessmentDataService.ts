import http from "../../http-common";

class AssessmentDataService {
  getAll(): Promise<any> {
    return http.get("/assessments");
  }

  get(id: any): Promise<any> {
    return http.get(`/assessments/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/assessments", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/assessments/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/assessments/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/assessments`);
  }

  // findByFName(fname: string): Promise<any> {
  //   return http.get(`/assessments?=${title}`);
  // }
}

export default new AssessmentDataService();
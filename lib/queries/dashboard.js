import { axiosInstance } from "../axios";

export const getSchedules = async () =>
  axiosInstance.get("/student/schedule").then((res) => res.data);

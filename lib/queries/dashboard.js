import { axiosInstance } from "../axios";

export const getSchedules = async (username) =>
  axiosInstance
    .get(`/student/schedule/`) ///?user=${username})`)
    .then((res) => res.data);

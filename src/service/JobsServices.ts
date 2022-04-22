import { API_URL } from "../const";

export const getDetail = async (id: any) => {
  return await fetch(`${API_URL}/positions/${id}`, {
    method: "GET",
  }).then((res) => res.json());
};

export const getList = async (params: any) => {

}
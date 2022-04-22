import { API_URL } from "../const";

export const getDetail = async (id: any) => {
  return await fetch(`${API_URL}/positions/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data.filter((item: any) => item));
};

export const getList = async (params?: any) => {
  return await fetch(
    `${API_URL}/positions.json?${new URLSearchParams(params)}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => data.filter((item: any) => item));
};

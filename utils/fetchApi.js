import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "4f81dce717msh9fc3fef97db0ac9p15775ajsn68cb33dc2a10",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};

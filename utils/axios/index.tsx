import HOST from "@/host";
import axios, { AxiosRequestConfig } from "axios";

function Axios<T>(config: AxiosRequestConfig) {
  //   let token = "";
  //   if (typeof window !== "undefined") {
  //     const tk = localStorage.getItem("token");
  //     if (tk) token = tk;
  //   }
  //   if (token) Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const axs = axios<T>({
    baseURL: HOST.baseURL,
    ...config,
  });

  return axs;
}
export default Axios;

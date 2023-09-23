import axios from "axios";

const api = axios.create({
  baseURL: "https://conteudo-portfolio-dudu.000webhostapp.com/",
});

export default api;

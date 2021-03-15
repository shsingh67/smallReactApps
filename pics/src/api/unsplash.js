import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IetnIUsWFUrK3gWBcHv9JwvPFoIpUFIPW9qhUrusJh0",
  },
});

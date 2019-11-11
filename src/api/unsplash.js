import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 36e342ae227212bd189844e32a78a10674dc2e9a7e1f831b620188ebdb87fdc2"
  }
});

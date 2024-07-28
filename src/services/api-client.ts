import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "365948937ad04c38bfeb40e6488c10e1",
  },
});

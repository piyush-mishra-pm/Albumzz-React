import axios from "axios";

// JSON-Server hosted on port 3003, to receive album HTTP requests.
export default axios.create({
  baseURL: "http://localhost:3003",
});

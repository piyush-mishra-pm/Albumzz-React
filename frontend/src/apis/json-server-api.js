import axios from "axios";

// JSON-Server hosted on port 3003, to receive album HTTP requests.
export default axios.create({
  baseURL: "https://react-albumzz-backend.herokuapp.com/:3003",
});

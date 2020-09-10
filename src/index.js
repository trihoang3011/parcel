import "./styles.css";
import axios from "axios";

const env = process.env.NODE_ENV === "development" ? "dev" : "prod";

(async () => {
  const { data } = await axios.get(
    "https://nerlos-dev-api.azurewebsites.net/api/Ping"
  );
  document.getElementById("app").innerText = JSON.stringify({ ...data, env });
})();

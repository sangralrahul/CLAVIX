import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (window.location.hostname === "clavixx.replit.app") {
  window.location.replace(
    "https://clavix.in" + window.location.pathname + window.location.search + window.location.hash
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}

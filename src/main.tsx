import { createRoot } from "react-dom/client";
// css
import "@styles/global.css";
import AppRouter from "@routes/AppRouter";

// axios
import "@services/axios-global";

createRoot(document.getElementById("root")!).render(<AppRouter />);

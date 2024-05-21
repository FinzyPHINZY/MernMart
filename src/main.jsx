import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StateProvider } from "./StateProvider.jsx";
import reducer, { initialState } from "./reducer.jsx";

createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

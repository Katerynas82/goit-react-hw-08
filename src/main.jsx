import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

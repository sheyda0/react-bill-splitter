import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FriendProvider } from "./context/Context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FriendProvider>
      <App />
    </FriendProvider>
  </React.StrictMode>
);

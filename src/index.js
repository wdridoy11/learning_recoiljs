import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={routes}></RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);

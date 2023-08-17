import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddProject from "./AddProject";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddExperience from "./AddExperience";
import DeleteProject from "./DeleteProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addproject",
    element: <AddProject />,
  },
  {
    path: "/addexperience",
    element: <AddExperience />,
  },
  {
    path: "/deleteproject",
    element: <DeleteProject />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

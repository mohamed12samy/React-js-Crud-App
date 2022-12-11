import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLaout } from "./pages/RootLaout";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { Details } from "./pages/Details";
import { Index } from "./pages/Index";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLaout />,
    errorElement:<Error/>,
    children: [
      { index: true, element: <Index /> },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "/:id/edit",
        element: <Edit />,
        loader:(data)=>{
          if(isNaN(data.params.id))
            throw new Response("Bad Request", {status:400});
         console.log(data)
        }
      },
      {
        path: "/:id",
        element: <Details />,
        loader:({params})=>{ 
          if(isNaN(params.id))
            throw new Response("Bad Request", {statusText:"please enter not string ID", status:400});
         }
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

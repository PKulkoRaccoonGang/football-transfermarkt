import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

const rootElement = document.getElementById("root")!;

if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


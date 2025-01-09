import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";

import {App} from "./App";
import {Player} from "@/pages/player";

const routes = [
    {
        path: "/player",
        element: <App />,
        children: [
            {
                path: '/player',
                element: <Suspense fallback={'Loading...'}><Player /></Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";

import {App} from "./App";
import {Clubs} from "@/pages/clubs";
import {AboutClub} from "@/pages/about-club";

const routes = [
    {
        path: "/clubs",
        element: <App />,
        children: [
            {
                path: '/clubs',
                element: <Suspense fallback={'Loading...'}>
                    <Clubs />
                </Suspense>
            },
            {
                path: '/clubs/:id',
                element: <Suspense fallback={'Loading...'}>
                    <AboutClub />
                </Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

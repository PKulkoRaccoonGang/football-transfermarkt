import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {LazyAbout} from "@/pages/about/About.lazy";
import {LazyPlayers} from "@/pages/players/Players.lazy";

const routes = [
    {
        path: "/players",
        element: <App />,
        children: [
            {
                path: '/players/main',
                element:  <Suspense fallback={'Loading...'}><LazyPlayers /></Suspense>
            },
            {
                path: '/players/about',
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

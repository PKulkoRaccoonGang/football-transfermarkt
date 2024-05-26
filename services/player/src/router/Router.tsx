import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {Player} from "@/pages/Player";
import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/player",
        element: <App />,
        children: [
            {
                path: '/player/main',
                element: <Suspense fallback={'Loading...'}><Player /></Suspense>
            },
            {
                path: '/player/second',
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>second page</h1>
                        <UserCard username={'FROM PLAYER'} />
                    </div>
                </Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

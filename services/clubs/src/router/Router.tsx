import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {Clubs} from "@/pages/Clubs";
import {UserCard} from "@packages/shared/src/components/UserCard";

const routes = [
    {
        path: "/clubs",
        element: <App />,
        children: [
            {
                path: '/clubs/main',
                element: <Suspense fallback={'Loading...'}><Clubs /></Suspense>
            },
            {
                path: '/clubs/second',
                element: <Suspense fallback={'Loading...'}>
                    <div style={{color: 'red'}}>
                        <h1>second page</h1>
                        <UserCard username={'FROM CLUBS'} />
                    </div>
                </Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;

import { Outlet } from "react-router-dom";

import "./assets/scss/Clubs.scss";

export const App = () => {
    return (
        <>
            <h1 className="text-center my-4">Explore Football Clubs</h1>
            <Outlet />
        </>
    );
};


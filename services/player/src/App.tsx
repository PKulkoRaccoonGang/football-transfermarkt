import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

import './assets/scss/Player.scss';

export const App = () => {
    return (
        <>
            <h1 className="text-center my-4">Football player</h1>
            <Container className="mt-5">
                <Outlet />
            </Container>
        </>
    );
};

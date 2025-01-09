import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

import { Header } from '@packages/shared/src/components/Header';
import { Footer } from '@packages/shared/src/components/Footer';

export const App = () => {
    return (
        <>
            <Header />

            <main>
                <Container className="mt-4">
                    <Outlet />
                </Container>
            </main>

            <Footer />
        </>
    );
};
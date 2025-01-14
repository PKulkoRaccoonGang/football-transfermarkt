import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header } from '@packages/shared/src/components/header';
import { Footer } from '@packages/shared/src/components/footer';

export const App = () => {
	return (
		<>
			<Header />

			<main>
				<Container className="mt-5 mb-5">
					<Outlet />
				</Container>
			</main>

			<Footer />
		</>
	);
};

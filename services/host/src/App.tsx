import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header, Footer, AIChat } from '@packages/shared/ui-kit';

export const App = () => {
	return (
		<div className="app-layout">
			<Header />
			<AIChat apiEndpoint="http://127.0.0.1:9000/api/v1/ai_integrations/gemini/" />
			<main className="content">
				<Container className="mt-5 mb-5">
					<Outlet />
				</Container>
			</main>
			<Footer />
		</div>
	);
};

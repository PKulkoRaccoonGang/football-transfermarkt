import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MetaTags } from '@packages/shared/ui-kit';

import './pages/index.scss';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MetaTags title="Authn" description="Explore and learn more about football clubs." />
			<Outlet />
		</QueryClientProvider>
	);
};

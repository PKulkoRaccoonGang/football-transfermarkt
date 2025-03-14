import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MetaTags } from '@packages/shared/ui-kit';

import { getTitle } from './utils';

import './pages/index.scss';

const queryClient = new QueryClient();

export const App = () => {
	const pageTitle = getTitle();

	return (
		<QueryClientProvider client={queryClient}>
			<MetaTags title={pageTitle} description="Explore and learn more about football clubs." />
			<h1 className="page-title text-center my-4">{pageTitle}</h1>
			<Outlet />
		</QueryClientProvider>
	);
};

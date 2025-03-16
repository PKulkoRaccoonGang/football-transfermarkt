import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MetaTags } from '@packages/shared/ui-kit';

import './pages/index.scss';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MetaTags
				title="Player"
				description="Explore more about football player."
				keywords="football, player, soccer"
				type="profile"
			/>
			<Outlet />
		</QueryClientProvider>
	);
};

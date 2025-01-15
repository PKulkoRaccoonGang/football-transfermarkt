import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { Player } from '@/pages/player';
import { Loader } from '@packages/shared/src/components/loader';

const routes = [
	{
		path: '/player',
		element: <App />,
		children: [
			{
				path: '/player',
				element: (
					<Suspense fallback={<Loader />}>
						<Player />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;

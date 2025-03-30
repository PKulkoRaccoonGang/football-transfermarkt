import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Player } from '@/pages/player';
import { Loader } from '@packages/shared/ui-kit';

import { App } from './App';

const routes = [
	{
		path: '/player',
		element: <App />,
		children: [
			{
				path: '/player:id',
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

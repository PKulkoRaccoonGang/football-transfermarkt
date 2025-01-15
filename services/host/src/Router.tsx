import { createBrowserRouter } from 'react-router-dom';

import { App } from './App';
// @ts-ignore
import playerRoutes from 'player/Router';
// @ts-ignore
import clubsRoutes from 'clubs/Router';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			...playerRoutes,
			...clubsRoutes,
		],
	},
]);

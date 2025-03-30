import { createBrowserRouter } from 'react-router-dom';

// @ts-ignore
import playerRoutes from 'player/Router';
// @ts-ignore
import clubsRoutes from 'clubs/Router';
// @ts-ignore
import authnRoutes from 'authn/Router';

import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [...playerRoutes, ...clubsRoutes, ...authnRoutes],
	},
]);

import { createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import playerRoutes from 'player/Router';
import clubsRoutes from 'clubs/Router';
import authnRoutes from 'authn/Router';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [...playerRoutes, ...clubsRoutes, ...authnRoutes],
	},
]);

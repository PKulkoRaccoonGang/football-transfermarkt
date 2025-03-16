import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Loader } from '@packages/shared/ui-kit';

import { App } from './App';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/login',
				element: (
					<Suspense fallback={<Loader />}>
						<Login />
					</Suspense>
				),
			},
			{
				path: '/register',
				element: (
					<Suspense fallback={<Loader />}>
						<Register />
					</Suspense>
				),
			},
			{
				path: '/profile',
				element: (
					<Suspense fallback={<Loader />}>
						<Profile />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;

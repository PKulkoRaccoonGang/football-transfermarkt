import { Outlet } from 'react-router-dom';

import { MetaTags } from '@packages/shared/src/components/meta-tags';

import { getTitle } from './utils';

import './pages/index.scss';

export const App = () => {
	const pageTitle = getTitle();

	return (
		<>
			<MetaTags title={pageTitle} description="Explore and learn more about football clubs." />
			<h1 className="page-title text-center my-4">{pageTitle}</h1>
			<Outlet />
		</>
	);
};

import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { MetaTags } from '@packages/shared/src/components/meta-tags';

import './pages/index.scss';

export const App = () => {
	return (
		<>
			<MetaTags
				title="Player"
				description="Explore more about football player."
				keywords="football, player, soccer"
				type="profile"
			/>
			<Outlet />
		</>
	);
};

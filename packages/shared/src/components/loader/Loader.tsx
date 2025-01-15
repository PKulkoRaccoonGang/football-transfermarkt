import { useEffect } from 'react';

import './Loader.scss';

export const Loader = () => {
	useEffect(() => {
		document.body.classList.add('no-scroll');
		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, []);

	return (
		<div className="loader-overlay">
			<div className="box">
				<div className="shadow" />
				<div className="gravity">
					<div className="ball" />
				</div>
			</div>
		</div>
	);
};

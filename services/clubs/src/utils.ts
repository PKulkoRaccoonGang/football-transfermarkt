import { useLocation } from 'react-router-dom';

/**
 * Determines the title based on the current route path.
 *
 * @returns {string} - The appropriate title for the current route.
 *
 */
export const getTitle = (): string => {
	const location = useLocation();

	if (location.pathname === '/clubs') {
		return 'Explore Football Clubs';
	}

	if (location.pathname.startsWith('/clubs/')) {
		return 'About the Football Club';
	}
	return 'Welcome to Football Transfermarkt';
};

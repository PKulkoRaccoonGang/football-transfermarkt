/**
 * Calculates the age of a player based on their birth date.
 *
 * @param {string} birthDateString - The birth date as a string (timestamp or ISO format).
 * @returns {number} The calculated age.
 *
 * @example
 * calculateAge("1995-06-15"); // Returns the age based on the current date
 */
export const calculateAge = (birthDateString: string) => {
	const today = new Date();
	const birthDate = new Date(Number.parseInt(birthDateString));

	let age = today.getFullYear() - birthDate.getFullYear();

	const isBirthdayPassed =
		today.getMonth() > birthDate.getMonth() ||
		(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

	if (!isBirthdayPassed) {
		age--;
	}

	return age;
};

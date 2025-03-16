/**
 * Converts a snake_case string to camelCase.
 *
 * @param {string} str - The snake_case string to be converted.
 * @returns {string} - The converted camelCase string.
 */
export const toCamelCase = (str: string): string => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

/**
 * Recursively converts all keys in an object or array from snake_case to camelCase.
 *
 * @template T
 * @param {T} data - The data to be converted. Can be an object, array, or any other value.
 * @returns {T} - The data with all keys converted to camelCase.
 */
export const convertToCamelCase = <T>(data: T): T => {
	if (Array.isArray(data)) {
		return data.map((item) => convertToCamelCase(item)) as T;
	}
	if (data !== null && typeof data === 'object') {
		return Object.entries(data).reduce(
			(acc, [key, value]) => {
				const camelKey = toCamelCase(key);
				(acc as Record<string, unknown>)[camelKey] = convertToCamelCase(value);
				return acc;
			},
			{} as Record<string, unknown>,
		) as T;
	}
	return data;
};

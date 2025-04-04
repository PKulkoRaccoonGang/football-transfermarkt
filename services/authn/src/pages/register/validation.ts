import * as yup from 'yup';

export const schema = yup.object().shape({
	userName: yup.string().required('User name is required'),
	email: yup.string().email('Invalid email format').required('Email is required'),
	password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required'),
});

import * as yup from 'yup';

export const schema = yup.object().shape({
  userName: yup
    .string()
    .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
    .required("Username is required"),
	password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

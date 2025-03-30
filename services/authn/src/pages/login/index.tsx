import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Alert, Container, Row, Col } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/ui-kit';

import { loginUser } from '../../data/api/authnApi';
import { schema } from './validation';

const Login = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const onSubmit = async (data: { userName: string; password: string }) => {
		try {
			setErrorMessage(null);
			await loginUser(data);
			window.location.href = 'http://localhost:3000/clubs';
		} catch (error) {
			setErrorMessage('Login failed. Please check your credentials.');
		}
	};

	return (
		<Container className="login-container">
			<Row className="justify-content-md-center">
				<Col md={6}>
					<h2 className="text-center">Login</h2>
					{errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Form.Group controlId="userName">
							<Form.Label>User name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter user name"
								{...register('userName')}
								isInvalid={!!errors.userName}
							/>
							<Form.Control.Feedback type="invalid">{errors.userName?.message}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="password" className="mt-3 mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								{...register('password')}
								isInvalid={!!errors.password}
							/>
							<Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
						</Form.Group>

						<ButtonLink className="w-100" type="button" disabled={isSubmitting}>
							{isSubmitting ? 'Logging in...' : 'Login'}
						</ButtonLink>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

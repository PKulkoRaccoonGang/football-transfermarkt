import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Alert, Container, Row, Col } from 'react-bootstrap';

import { ButtonLink } from '@packages/shared/ui-kit';

import { registerNewUser } from '../../data/api/authnApi';
import { schema } from './validation';

const Register = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const onSubmit = async (data: { userName: string; email: string; password: string }) => {
		try {
			setErrorMessage(null);
			await registerNewUser(data);
			window.location.href = 'http://localhost:3000/clubs';
		} catch (error) {
			setErrorMessage('Registration failed. Please try again.');
		}
	};

	return (
		<Container className="register-container">
			<Row className="justify-content-md-center">
				<Col md={6}>
					<h2 className="text-center">Register</h2>
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

						<Form.Group controlId="email" className="mt-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" {...register('email')} isInvalid={!!errors.email} />
							<Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="password" className="mt-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								{...register('password')}
								isInvalid={!!errors.password}
							/>
							<Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group controlId="confirmPassword" className="mt-3 mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm password"
								{...register('confirmPassword')}
								isInvalid={!!errors.confirmPassword}
							/>
							<Form.Control.Feedback type="invalid">{errors.confirmPassword?.message}</Form.Control.Feedback>
						</Form.Group>

						<ButtonLink className="w-100" type="button" disabled={isSubmitting}>
							{isSubmitting ? 'Registering...' : 'Register'}
						</ButtonLink>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Register;

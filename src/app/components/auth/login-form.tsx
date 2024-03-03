'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { login } from '@/app/actions/login';
import { useFormStatus } from 'react-dom';
import { FormError } from './form-error';

export const LoginForm = () => {
	const [error, setError] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const onSubmit = (formData: FormData) => {
		startTransition(async () => {
			const data = await login(formData);
			setError(data?.error?.message);
		});
	};

	return (
		<section>
			<h1>Login</h1>
			<form action={async formData => onSubmit(formData)}>
				<input
					type='text'
					name='email'
					placeholder='Email'
				/>
				<input
					type='text'
					name='password'
					placeholder='Password'
				/>
				<br />
				<button type='submit'>Login</button>
			</form>
			<FormError message={error} />
			<span>
				Don’t have an account? <Link href='/register'>Register</Link>
			</span>
		</section>
	);
};

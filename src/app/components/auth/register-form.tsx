'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import { register } from '@/app/actions/register';
import { FormSuccess } from './form-success';
import { FormError } from './form-error';
import Button from '../ui/button';
import PasswordInput from '../ui/passwordInput';

export const RegisterForm = () => {
	const [success, setSuccess] = useState<string | undefined>('');
	const [error, setError] = useState<string | undefined>('');
	const [isPending, startTransition] = useTransition();

	const onSubmit = (formData: FormData) => {
		setError('');

		startTransition(async () => {
			const data = await register(formData);
			setError(data.error?.message);
			setSuccess(data.success?.username);
		});
	};

	return (
		<>
			<h1 className='relative top-56 text-white font-bold text-[34px] tracking-[0.37px]'>
				Register
			</h1>

			<div className='flex flex-row justify-end mt-6 mr-6'>
				<Image
					src='/ciao_bodyType1.svg'
					width={129}
					height={316}
					alt='CiaoChow Character1'
				/>
			</div>

			<form action={async formData => onSubmit(formData)}>
				<div className='mb-4'>
					<label
						htmlFor='username'
						className='block text-base font-medium text-gray-dark'
					>
						username
					</label>
					<input
						type='text'
						id='username'
						name='username'
						placeholder='muncher'
						className='mt-1 p-3 rounded-md w-full bg-greyLight text-gray border-0'
					/>
				</div>

				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-base font-medium text-gray-dark'
					>
						email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='yourmail@mail.com'
						className='mt-1 p-3 rounded-md w-full bg-greyLight text-gray border-0'
					/>
				</div>

				<div className='mb-4'>
					<PasswordInput />
				</div>

				<Button className='bg-chow text-white mt-4 px-32 py-3 text-lg w-full'>
					<div className='w-full'>Register</div>
				</Button>
			</form>
			<FormSuccess message={success} />
			<FormError message={error} />
			<p className='text-center mt-8 mb-4 text-chow text-[12px]'>
				Have an account?{' '}
				<Link
					href='/login'
					className='font-bold
				'
				>
					Login
				</Link>
			</p>
		</>
	);
};

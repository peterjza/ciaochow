'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const login = async (formData: FormData) => {
	console.log(formData);
	const loginApiEndpoint = 'https://ciaochow.plusnarrative.biz/api/auth/local';

	const user = {
		identifier: formData.get('email'),
		password: formData.get('password'),
	};

	const response = await fetch(loginApiEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	});

	if (response.ok) {
		const { jwt } = await response.json();
		const expires = new Date(Date.now() + 10 * 10009999);

		cookies().set({
			name: 'token',
			value: jwt,
			httpOnly: true,
			expires,
		});

		redirect(`/chows`);
	} else {
		const { error } = await response.json();
		console.log('error', error);

		return { error };
	}
};

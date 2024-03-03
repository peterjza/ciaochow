'use server';

import { cookies } from 'next/headers';

export const getChows = async () => {
	const loginApiEndpoint =
		'https://ciaochow.plusnarrative.biz/api/chows?populate=*';

	const token = cookies().get('token');

	const response = await fetch(loginApiEndpoint, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token?.value}`,
		},
	});

	if (response.ok) {
		return await response.json();
	} else {
		const test = await response.json();
		console.log(2, test);
	}
};

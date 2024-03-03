'use server';

export const register = async (formData: FormData) => {
	console.log(formData);
	const loginApiEndpoint =
		'https://ciaochow.plusnarrative.biz/api/auth/local/register';

	const newUser = {
		username: formData.get('username'),
		email: formData.get('email'),
		password: formData.get('password'),
	};

	const response = await fetch(loginApiEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	});

	if (response.ok) {
		const { user } = await response.json();
		return { success: user };
	} else {
		const { error } = await response.json();
		return { error };
	}
};

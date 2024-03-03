// import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface FormSuccessProps {
	message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
	if (!message) return null;

	return (
		<div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
			{/* <CheckCircle className='h-4 w-4' /> */}
			<p>Congradulations {message} your account has been created</p>
			<p>
				Please <Link href='/login'>Login</Link> here
			</p>
		</div>
	);
};

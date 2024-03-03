import Link from 'next/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className='container relative min-h-screen overflow-hidden justify-center px-5'>
			<span className='absolute top-[-245px] left-[-230px] w-[696px] h-[589px] rounded-[50%] bg-chow z-0'></span>

			<div className='relative z-10'>
				<Link
					href='/'
					className='relative top-8'
				>
					<HiOutlineChevronLeft className='text-white text-2xl' />
				</Link>

				{children}
			</div>
		</section>
	);
}

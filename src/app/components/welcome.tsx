import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/button';
import BreadCrumbs from './ui/breadCrumbs';

export const WelcomeBlurb = () => {
	return (
		<section className='bg-chow min-h-screen min-w-full flex flex-col items-center'>
			<Image
				className='mt-16 mb-12'
				src='/ciao_logo.svg'
				width={197}
				height={34}
				alt='CiaoChow Logo'
			/>

			<div className='flex flex-row'>
				<Image
					src='/ciao_bodyType1.svg'
					width={125}
					height={285}
					alt='CiaoChow Character1'
				/>

				<Image
					src='/ciao_bodyType2.svg'
					width={144}
					height={289}
					alt='CiaoChow Character2'
				/>
			</div>

			<p className='text-white mx-20 text-center mt-20 text-xl font-light'>
				Hungry? <span className='font-bold'>CiaoChow</span> helps you find
				something to eat.
			</p>

			<Button className='bg-white text-chow mt-9 px-32 py-3 text-lg'>
				<Link href='/register'>Get Started</Link>
			</Button>

			<BreadCrumbs
				count={3}
				current={0}
			/>
		</section>
	);
};

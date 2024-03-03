import React from 'react';

interface BreadCrumbProps {
	count: number;
	current: number;
}

const BreadCrumbs: React.FC<BreadCrumbProps> = ({ current, count }) => {
	const breadcrumbs = Array.from({ length: count }, (_, index) => {
		return (
			<li
				key={index}
				// className={index === current ? 'current' : ''}
				className={`w-2 h-2 rounded-full mx-1 ${
					index === current ? 'bg-white' : 'bg-grey'
				}`}
			></li>
		);
	});

	return <ol className='flex mt-10'>{breadcrumbs}</ol>;
};

export default BreadCrumbs;

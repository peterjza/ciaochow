'use client';

import React, { useState, useEffect } from 'react';
import { getChows } from '@/app/actions/chows';
import ChowsSkeleton from '@/app/components/chowsSkeleton';
import ChowsSection from '@/app/components/chowsSection';

type ChowsData = {
	id: number;
	attributes: {
		Description: string;
		Image: { data: Array<any> };
		Title: string;
		createdAt: string;
		publishedAt: string;
		updatedAt: string;
	};
};

const SkeletonComponent: React.FC = () => {
	// You can customize your loading skeleton here
	return (
		<div className='skeleton'>
			<p>Loading...</p>
		</div>
	);
};

const ChowsPage = () => {
	const [data, setData] = useState<ChowsData[]>([]);
	const [loading, setLoading] = useState(true);
	const [index, setIndex] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getChows();
				const fetchedData: ChowsData[] = response.data;
				setData(fetchedData);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const handleButtonClick = () => {
		setIndex(prevIndex => prevIndex + 1);
	};

	const selectedItem = data.find(item => item.id === index);

	return (
		<div>
			{loading ? (
				<ChowsSkeleton />
			) : selectedItem ? (
				<ChowsSection
					title={selectedItem.attributes.Title}
					onButtonClick={handleButtonClick}
				/>
			) : (
				<p>No matching item found</p>
			)}
		</div>
	);
};

export default ChowsPage;

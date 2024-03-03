import React, { useState } from 'react';

interface Tab {
	name: string;
	title: string;
	description: React.ReactNode;
}

interface TabsProps {
	tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div>
			<ul className='overflow-hidden tab-buttons flex items-center justify-center pb-1 mt-6 border-b-[1px] border-gray-300'>
				{tabs.map((tab, index) => (
					<li
						key={index}
						className={`h-[30px] mx-10 text-[14px] ${
							index === activeTab
								? 'active text-chow'
								: 'border-0 border-transparent'
						}`}
						onClick={() => handleTabClick(index)}
					>
						{tab.name}
						{index === activeTab ? (
							<div className='bg-chow h-[10px] w-full rounded relative top-[9px]'></div>
						) : null}
					</li>
				))}
			</ul>
			<div className='tab-content p-8 text-[13px] text-gray-500'>
				{tabs[activeTab].description}
			</div>
		</div>
	);
};

export default Tabs;

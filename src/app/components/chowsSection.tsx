type ChowsSectionProps = {
	title: string;
	onButtonClick: () => void;
};

const ChowsSection: React.FC<ChowsSectionProps> = ({
	title,
	onButtonClick,
}) => {
	return (
		<div className='flex flex-row min-h-screen min-w-full max-h-screen bg-slate-400'>
			<h3>{title}</h3>
			<button onClick={onButtonClick}>Change Index</button>
		</div>
	);
};

export default ChowsSection;

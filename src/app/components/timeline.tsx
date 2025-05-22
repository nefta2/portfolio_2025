'use client';

interface TimelineItem {
	title: string;
	year?: string | number;
	description: string;
}

interface WhiteButtonProps {
	data: TimelineItem[];
}

export default function Timeline({ data }: WhiteButtonProps) {
	return data.map((x: TimelineItem, index) => {
		return (
			<div
				key={index}
				className="flex flex-col gap-5 relative border-solid border-l-1 pl-[20px] pb-8"
			>
				<div className="w-full flex flex-row justify-between gap-2 text-[20px] md:text-[26px]">
					<div className="w-3 h-3 left-[-6px] bg-white rounded-full absolute"></div>
					<h1>{x.title}</h1>
					<h1>{x?.year}</h1>
				</div>
				<div className="text-[12px] md:text-[16px]">
					<h2>{x.description}</h2>
				</div>
			</div>
		);
	});
}

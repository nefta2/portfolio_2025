'use client';
import { useRouter } from 'next/navigation';

interface WhiteButtonProps {
	title: string;
	horizontalPadding?: number;
	verticalPadding?: number;
	width?: number;
	route?: string;
}

export default function WhiteButton({
	title,
	horizontalPadding,
	verticalPadding,
	width,
	route,
}: WhiteButtonProps) {
	const router = useRouter();

	const clickButton = () => {
		if (route) {
			router.push(route);
		} else {
			console.error('Route is undefined');
		}
	};
	return (
		<button
			className={`border-1 border-solid border-white p-3 rounded-lg px-[${horizontalPadding}px] px-[${verticalPadding}px] text-[18px]`}
			style={{
				width: width,
			}}
			onClick={clickButton}
		>
			{title}
		</button>
	);
}

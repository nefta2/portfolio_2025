'use client';
import { button, nav } from 'motion/react-client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});

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
	const pathname = usePathname();

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

'use client';
import { Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/navigation';
import WhiteButton from '../components/white-button';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});

export default function ContactMe() {
	return (
		<div
			className={`${spaceGrotesk.className} flex flex-row gap-10 items-center  h-full mx-40`}
		>
			<h1 className="text-[30px]">Works.</h1>
		</div>
	);
}

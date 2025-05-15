'use client';
import { Space_Grotesk } from 'next/font/google';
import { useRouter } from 'next/navigation';
import WhiteButton from '../components/white-button';
import Gallery from '../components/gallery';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});

export default function ContactMe() {
	const works = [
		{
			name: 'Art Gallery Website',
			description: 'Website for the paintings of an artist.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['React', 'Javascript', 'Scss', 'Html'],
		},
		{
			name: 'Green Trades Design',
			description:
				'Prototype for an app dedicated to trading second hand products.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['Figma', 'UI/UX'],
		},
		{
			name: 'Art Gallery Website',
			description: 'Website for the paintings of an artist.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['React', 'Javascript', 'Scss', 'Html'],
		},
		{
			name: 'Green Trades Design',
			description:
				'Prototype for an app dedicated to trading second hand products.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['Figma', 'UI/UX'],
		},
		{
			name: 'Art Gallery Website',
			description: 'Website for the paintings of an artist.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['React', 'Javascript', 'Scss', 'Html'],
		},
		{
			name: 'Green Trades Design',
			description:
				'Prototype for an app dedicated to trading second hand products.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['Figma', 'UI/UX'],
		},
	];
	return (
		<div
			className={`${spaceGrotesk.className} flex flex-col  gap-10 items-center  h-full mx-40`}
		>
			<h1 className="flex flex-row items-start w-full text-[30px]">Works.</h1>

			<Gallery items={works} />
		</div>
	);
}

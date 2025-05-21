import { button, div, nav, style } from 'motion/react-client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import TagsGroup from './tags-group';
import './gallery.css';
import { ChevronLeftIcon } from '@heroicons/react/16/solid';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});

interface SideInfoBar {
	title: string;
	smDescription: string;
	about?: string;
	tags?: string[];
	github?: string;
	close?: () => void;
}

export default function SideInfoBar({
	title,
	smDescription,
	about,
	tags,
	close,
	github,
}: SideInfoBar) {
	return (
		<div
			className={`${spaceGrotesk.className} flex flex-col gap-10 top-0 right-0 h-full bg-[#1d1d1d] p-5 px-10 translate-x-0 z-50`}
		>
			<div className="flex flex-row flex-start cursor-pointer" onClick={close}>
				<ChevronLeftIcon className="w-10 h-10" strokeWidth={1} />
			</div>
			<div className="flex flex-col gap-2">
				<h1>
					<span className="text-[40px] font-bold">{title}</span>
				</h1>
				<h3>
					<span className="text-[16px] font-medium">{smDescription}</span>
				</h3>
			</div>
			<div className="flex flex-col gap-2">
				<h2>
					<span className="text-[30px] font-bold">About</span>
				</h2>
				<h3>
					<span className="text-[16px] font-medium">{about}</span>
				</h3>
			</div>
			<div className="flex flex-col gap-2">
				<h2>
					<span className="text-[30px] font-bold">Tags</span>
				</h2>
				<h3>
					<TagsGroup tags={tags || []} />
				</h3>
			</div>

			{github && (
				<div className="flex flex-col gap-2">
					<h2>
						<span className="text-[30px] font-bold flex flex-row gap-2 items-center">
							{' '}
							<img
								src="github-mark-white.png"
								alt="GitHub Logo"
								className="w-5 h-5"
							/>{' '}
							Github
						</span>
					</h2>
					<a
						href={github}
						target="_blank"
						className="text-[#898989] hover:underline"
					>
						{github}
					</a>
				</div>
			)}
		</div>
	);
}

'use client';
import { button, div, nav } from 'motion/react-client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});

interface TagsGroupProps {
	tags: string[];
}

export default function TagsGroup({ tags }: TagsGroupProps) {
	return (
		<div className="flex flex-row gap-3  relative">
			{tags.map((x: string, index) => {
				return (
					<div
						key={index}
						className="bg-[#454545] py-2 px-4 rounded-full text-[12px]"
					>
						{x}
					</div>
				);
			})}
		</div>
	);
}

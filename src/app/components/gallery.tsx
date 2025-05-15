import { button, div, nav } from 'motion/react-client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import TagsGroup from './tags-group';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});
interface itemProps {
	name: string;
	description: string;
	bgPhoto: string;
	tags: string[];
}

interface GalleryProps {
	items: itemProps[];
}

export default function Gallery({ items }: GalleryProps) {
	return (
		<div className="grid lg:grid-cols-2 gap-5 w-full">
			{items.map((x: itemProps, index) => {
				return (
					<div
						key={index}
						className="gap-5 relative w-full h-[400px] bg-cover bg-center rounded-lg p-[30px]"
						style={{ backgroundImage: `url(/${x.bgPhoto})` }}
					>
						<div className="flex flex-col items-start justify-end gap-2 text-[20px] h-[100%] md:text-[26px]">
							<h1 className="font-bold">{x.name}</h1>
							<h2 className="text-[16px]">{x.description}</h2>
							<TagsGroup tags={x.tags} />
						</div>
					</div>
				);
			})}
		</div>
	);
}

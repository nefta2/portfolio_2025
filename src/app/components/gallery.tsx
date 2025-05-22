'use client';
import './gallery.css';

import GalleryItem from './gallery-item';

interface itemProps {
	name: string;
	description: string;
	bgPhoto: string;
	tags: string[];
	about?: string;
	github?: string;
	figma?: string;
}

interface GalleryProps {
	items: itemProps[];
}

export default function Gallery({ items }: GalleryProps) {
	return (
		<div className="grid lg:grid-cols-2 gap-5 w-full">
			{items.map((item, index) => (
				<GalleryItem key={index} item={item} />
			))}
		</div>
	);
}

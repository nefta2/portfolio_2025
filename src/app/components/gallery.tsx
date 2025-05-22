'use client';
import { Space_Grotesk } from 'next/font/google';
import TagsGroup from './tags-group';
import './gallery.css';
import {
	useFloating,
	useClick,
	useInteractions,
	FloatingPortal,
	FloatingOverlay,
	FloatingFocusManager,
	useRole,
	useDismiss,
} from '@floating-ui/react';
import SideInfoBar from './side-info-bar';
import { useEffect, useState } from 'react';
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

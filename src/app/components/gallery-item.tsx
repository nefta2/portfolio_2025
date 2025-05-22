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

interface itemProps {
	name: string;
	description: string;
	bgPhoto: string;
	tags: string[];
	about?: string;
	github?: string;
	figma?: string;
}

export default function GalleryItem({ item }: { item: itemProps }) {
	const [isOpen, setIsOpen] = useState(false);
	const { context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
	});
	const click = useClick(context);
	const role = useRole(context);
	const dismiss = useDismiss(context, {
		outsidePressEvent: 'mousedown',
	});
	const { getFloatingProps } = useInteractions([click, role, dismiss]);
	const [hasEntered, setHasEntered] = useState(false);

	useEffect(() => {
		if (isOpen) {
			const timeout = setTimeout(() => {
				setHasEntered(true);
			}, 10);
			return () => clearTimeout(timeout);
		} else {
			setHasEntered(false);
		}
	}, [isOpen]);

	return (
		<div>
			<div
				className="group relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden cursor-pointer"
				style={{ backgroundImage: `url(/${item.bgPhoto})` }}
				onClick={() => setIsOpen(true)}
			>
				<div
					className={`absolute bottom-0 opacity-100 left-0 w-full h-full bg-gradient-to-t from-black/100 via-black/50 to-transparent 
					${isOpen ? 'opacity-100' : 'lg:opacity-0 lg:group-hover:opacity-100'} 
					transition-opacity duration-300`}
				></div>

				<div
					className={`absolute bottom-[40px] lg:bottom-0 left-0 w-full p-6 transform transition-all duration-300 text-white
					${isOpen ? 'opacity-100 translate-y-0' : 'lg:opacity-0 translate-y-10'}
					lg:group-hover:translate-y-0 lg:group-hover:opacity-100`}
				>
					<h1 className="font-bold text-[20px] md:text-[26px]">{item.name}</h1>
					<h2 className="text-[16px]">{item.description}</h2>
					<TagsGroup tags={item.tags} />
				</div>
			</div>

			<FloatingPortal>
				{isOpen && (
					<FloatingOverlay
						className="fixed inset-0 bg-black/50 flex items-end justify-end z-50"
						lockScroll
					>
						<FloatingFocusManager context={context} modal={true}>
							<div
								className={`h-full bg-[#1d1d1d] shadow-lg max-w-lg w-full transform transition-transform duration-300 ease-out ${
									hasEntered
										? 'opacity-100 translate-x-0'
										: 'opacity-0 translate-x-100'
								}`}
								{...getFloatingProps()}
							>
								<SideInfoBar
									title={item.name}
									smDescription={item.description}
									about={item.about}
									tags={item.tags}
									close={() => setIsOpen(false)}
									github={item.github}
									figma={item.figma}
								/>
							</div>
						</FloatingFocusManager>
					</FloatingOverlay>
				)}
			</FloatingPortal>
		</div>
	);
}

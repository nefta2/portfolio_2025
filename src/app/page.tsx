'use client';
import { Space_Grotesk } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { mix, motion } from 'framer-motion';
import { text } from 'stream/consumers';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVairiant] = useState('default');

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
		text: {
			height: 200,
			width: 200,
			x: mousePosition.x - 100,
			y: mousePosition.y - 100,
			backgroundColor: 'white',
			mixBlendMode: 'difference',
		},
	};

	const textEnter = () => {
		setCursorVairiant('text');
	};
	const textLeave = () => {
		setCursorVairiant('default');
	};

	return (
		<div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center h-screen overflow-hidden bg-figma-dark-gray">
			<main
				className={`${spaceGrotesk.className} w-full flex flex-col  row-start-2 items-center sm:items-start h-full`}
			>
				<div className="flex w-full place-content-around text-[56px] h-[50%]">
					<div className="flex justify-center items-center w-full border-r-[0.5px] border-b-[0.5px] border-r-white border-b-white bg-[url(/meteor.svg)]">
						(I) about.
					</div>
					<div className="flex w-full justify-center items-center border-r-[0.5px] border-b-[0.5px] border-r-white border-b-white bg-cover bg-center bg-[url(/simple_shiny.svg)]">
						(II) works.
					</div>
					<div className="flex w-full justify-center items-center border-b-[0.5px] border-b-white bg-[url(/sprinkle.svg)]">
						(III) contact me.
					</div>
				</div>
				<div className="gradient-text h-[85%] flex flex-col justify-end px-[50px] tracking-[25px] text-[178px] leading-[0.95] p-[0px_55px] text-center sm:text-left text-transparent animate-gradient">
					<div
						onMouseEnter={textEnter}
						onMouseLeave={textLeave}
						className="w-max"
					>
						ONE
					</div>
					<div
						onMouseEnter={textEnter}
						onMouseLeave={textLeave}
						className="w-max"
					>
						PORTFOLIO BY
					</div>
					<div
						onMouseEnter={textEnter}
						onMouseLeave={textLeave}
						className="w-max"
					>
						DIEGO BURGOS.
					</div>
				</div>
			</main>
			<motion.div
				className="cursor"
				variants={variants}
				animate={cursorVariant}
			/>
		</div>
	);
}

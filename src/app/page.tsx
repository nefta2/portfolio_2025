'use client';
import { Space_Grotesk, Vast_Shadow } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { animate, mix, motion } from 'framer-motion';
import { text } from 'stream/consumers';
import { press } from 'framer-motion';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState('default');
	const [showClickText, setShowClickText] = useState(false);

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
			x: mousePosition.x - 12,
			y: mousePosition.y - 12,
			transition: { type: 'linear', duration: 0.05 },
		},
		text: {
			height: 200,
			width: 200,
			x: mousePosition.x - 100,
			y: mousePosition.y - 100,
			backgroundColor: 'white',
			mixBlendMode: 'difference' as const,
			transition: { type: 'spring', stiffness: 500, damping: 28 },
		},
		textSmall: {
			height: 100,
			width: 100,
			x: mousePosition.x - 50,
			y: mousePosition.y - 50,
			backgroundColor: 'white',
			zIndex: 1,
			mixBlendMode: 'difference' as const,
			transition: { type: 'spring', stiffness: 500, damping: 28 },
		},
	};

	const textEnter = () => {
		setCursorVariant('text');
	};

	const textEnterClickable = (isClickable?: boolean) => {
		setCursorVariant('default');
		if (isClickable) {
			setShowClickText(true);
		}
	};

	const textLeave = (isClickable?: boolean) => {
		setCursorVariant('default');
		if (isClickable) {
			setShowClickText(true);
		} else {
			setShowClickText(false);
		}
	};

	const textEnterSmall = (isClickable?: boolean) => {
		setCursorVariant('textSmall');
		if (isClickable) {
			setShowClickText(true);
		}
	};

	return (
		<div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center h-screen overflow-hidden bg-figma-dark-gray">
			<main
				className={`${spaceGrotesk.className} w-full flex flex-col  row-start-2 items-center sm:items-start h-full`}
			>
				<div className="flex w-full place-content-around text-[56px] h-[50%]">
					<div
						onMouseEnter={() => textEnterClickable(true)}
						onMouseLeave={() => textLeave(false)}
						className="about-image flex justify-center items-center w-full border-r-[0.5px] border-b-[0.5px] border-r-white border-b-white"
					>
						<p
							onMouseEnter={() => textEnterSmall(true)}
							onMouseLeave={() => textLeave(true)}
						>
							(I) about.
						</p>
					</div>
					<div
						onMouseEnter={() => textEnterClickable(true)}
						onMouseLeave={() => textLeave(false)}
						className="works-image flex w-full justify-center items-center border-r-[0.5px] border-b-[0.5px] border-r-white border-b-white"
					>
						<p
							onMouseEnter={() => textEnterSmall(true)}
							onMouseLeave={() => textLeave(true)}
						>
							(II) works.
						</p>
					</div>
					<div
						onMouseEnter={() => textEnterClickable(true)}
						onMouseLeave={() => textLeave(false)}
						className="flex w-full justify-center items-center border-b-[0.5px] border-b-white bg-[url(/sprinkle.svg)]"
					>
						<p
							onMouseEnter={() => textEnterSmall(true)}
							onMouseLeave={() => textLeave(true)}
						>
							(III) contact me.
						</p>
					</div>
				</div>
				<div className="gradient-text h-[85%] flex flex-col justify-end px-[50px] tracking-[25px] text-[178px] leading-[0.95] p-[0px_55px] text-center sm:text-left text-transparent animate-gradient">
					<div
						onMouseEnter={textEnter}
						onMouseLeave={() => textLeave(false)}
						className="w-max"
					>
						ONE
					</div>
					<div
						onMouseEnter={textEnter}
						onMouseLeave={() => textLeave(false)}
						className="w-max"
					>
						PORTFOLIO BY
					</div>
					<div
						onMouseEnter={textEnter}
						onMouseLeave={() => textLeave(false)}
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
				onMouseDown={(e: { currentTarget: any }) => {
					animate(
						e.currentTarget,
						{ scale: 0.1 },
						{ type: 'spring', stiffness: 1000 }
					);
				}}
				onMouseUp={(e: { currentTarget: any }) => {
					animate(
						e.currentTarget,
						{ scale: 5 },
						{ type: 'spring', stiffness: 500 }
					);
				}}
			/>
			{showClickText && (
				<motion.div
					className={`${spaceGrotesk.className} cursor-text fixed pointer-events-none`}
					style={{
						top:
							cursorVariant === 'default'
								? mousePosition.y - 5
								: cursorVariant === 'textSmall'
								? mousePosition.y - 10
								: mousePosition.y,
						left:
							cursorVariant === 'default'
								? mousePosition.x + 30
								: cursorVariant === 'textSmall'
								? mousePosition.x + 60
								: mousePosition.x + 100,
						fontSize: cursorVariant === 'textSmall' ? '20px' : undefined,
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					Click now!
				</motion.div>
			)}
		</div>
	);
}

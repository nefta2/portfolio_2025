'use client';
import { Space_Grotesk } from 'next/font/google';
import { useEffect, useState } from 'react';
import { animate, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState('default');
	const [showClickText, setShowClickText] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', mouseMove);
		return () => window.removeEventListener('mousemove', mouseMove);
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

	const textEnter = () => setCursorVariant('text');
	const textEnterSmall = (isClickable?: boolean) => {
		setCursorVariant('textSmall');
		if (isClickable) setShowClickText(true);
	};
	const textEnterClickable = (isClickable?: boolean) => {
		setCursorVariant('default');
		if (isClickable) setShowClickText(true);
	};
	const textLeave = (isClickable?: boolean) => {
		setCursorVariant('default');
		if (!isClickable) setShowClickText(false);
	};

	return (
		<>
			<Head>
				<title>1DB</title>
			</Head>
			<div className="flex cursor-none items-center justify-items-center h-screen overflow-hidden bg-figma-dark-gray">
				<main
					className={`${spaceGrotesk.className} w-full flex flex-col row-start-2 items-center sm:items-start h-full`}
				>
					<div className="flex flex-col flex-nowrap h-[90%] sm:flex-row w-full sm:flex-nowrap place-content-around lg:text-[56px] md:text-[30px] sm:h-[40%]">
						{[
							{
								text: '(I) about.',
								className: 'about-image',
								route: '/about',
							},
							{
								text: '(II) works.',
								className: 'works-image',
								route: '/works',
							},
							{
								text: '(III) contact me.',
								className: 'contact-me',
								route: '/contact-me',
							},
						].map(({ text, className, route }, i) => (
							<div
								key={i}
								onMouseEnter={() => textEnterClickable(true)}
								onMouseLeave={() => textLeave(false)}
								className={`flex justify-center items-center text-[16px] md:text-[32px] xl:text-[45px] w-full h-full border-b-[0.5px] border-b-white ${
									i !== 2 ? 'border-r-[0.5px] border-r-white' : ''
								} ${className} bg-cover bg-center`}
								style={i === 2 ? { backgroundImage: 'url(/sprinkle.svg)' } : {}}
								onClick={() => route && router.push(route)}
							>
								<p
									onMouseEnter={() => textEnterSmall(true)}
									onMouseLeave={() => textLeave(true)}
								>
									{text}
								</p>
							</div>
						))}
					</div>

					<div className="gradient-text flex flex-col justify-end  px-4 size-[-webkit-fill-available] tracking-[8px] sm:tracking-[25px] text-center sm:text-left text-transparent animate-gradient h-full sm:h-[60%]">
						{['ONE', 'PORTFOLIO BY', 'DIEGO BURGOS.'].map((line, idx) => (
							<div
								key={idx}
								onMouseEnter={textEnter}
								onMouseLeave={() => textLeave(false)}
								className="flex flex-col w-full text-start items-start text-[50px] leading-[1.15] xs:leading-[0.95] xs:text-[60px] sm:text-[85px] sm:tracking-[6px] md:text-[110px] md:tracking-[10px] lg:text-[120px] lg:tracking-[14px] xl:text-[145px] 2xl:text-[160px] 2xl:tracking-[25px] 3xl:text-[175px]"
							>
								{line}
							</div>
						))}
					</div>
				</main>

				{!isMobile && (
					<motion.div
						className="cursor"
						variants={variants}
						animate={cursorVariant}
						onMouseDown={(e) =>
							animate(
								e.currentTarget,
								{ scale: 0.1 },
								{ type: 'spring', stiffness: 1000 }
							)
						}
						onMouseUp={(e) =>
							animate(
								e.currentTarget,
								{ scale: 5 },
								{ type: 'spring', stiffness: 500 }
							)
						}
					/>
				)}

				{showClickText && !isMobile && (
					<motion.div
						className={`${spaceGrotesk.className} cursor-text pointer-events-none text-white`}
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
		</>
	);
}

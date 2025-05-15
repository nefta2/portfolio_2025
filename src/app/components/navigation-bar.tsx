'use client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navigation-bar.css';
import { useState } from 'react';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});

export default function NavigationBar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav
			className={
				pathname === '/'
					? 'hidden'
					: `${spaceGrotesk.className} relative z-50 flex justify-between items-center text-[18px] p-[25px]`
			}
		>
			{/* Logo */}
			<div>
				<Link href="/" className="nav-link-db">
					DB
				</Link>
			</div>

			{/* Burger Icon */}
			<div className="lg:hidden z-50 transition-opacity duration-300 ease-in-out">
				<button
					onClick={toggleMenu}
					aria-label="Toggle menu"
					className={`burger-button ${isOpen ? 'open' : ''}`}
				>
					<span className="line top"></span>
					<span className="line middle"></span>
					<span className="line bottom"></span>
				</button>
			</div>

			<div className="hidden lg:flex gap-10">
				{['about', 'works', 'contact-me'].map((page) => (
					<Link
						key={page}
						href={`/${page}`}
						className={
							pathname === `/${page}`
								? 'underline underline-offset-2'
								: 'nav-link'
						}
					>
						{page.replace('-', ' ')}
					</Link>
				))}
			</div>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center gap-8 text-2xl text-white lg:hidden transition-all z-40">
					{['about', 'works', 'contact-me'].map((page, index) => (
						<Link
							key={page}
							href={`/${page}`}
							className={`dropdown-link ${
								pathname === `/${page}`
									? 'underline underline-offset-2'
									: 'nav-link'
							}`}
							style={{ animationDelay: `${index * 0.2}s` }}
							onClick={() => setIsOpen(false)}
						>
							{page.replace('-', ' ')}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}

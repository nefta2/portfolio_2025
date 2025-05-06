'use client';
import { nav } from 'motion/react-client';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './navigation-bar.css';

const spaceGrotesk = Space_Grotesk({
	weight: '400',
	subsets: ['latin'],
});
export default function NavigationBar() {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<nav
			className={
				pathname === '/'
					? 'hidden'
					: `${spaceGrotesk.className} flex justify-between text-[18px] p-[25px] gap-4`
			}
		>
			<div>
				<Link href="/" className="nav-link-db">
					DB
				</Link>
			</div>
			<div className="flex gap-10">
				<Link
					href={'/about'}
					className={
						pathname === '/about' ? 'underline underline-offset-2' : 'nav-link'
					}
				>
					about
				</Link>
				<Link href={'/works'} className="nav-link">
					works
				</Link>
				<Link href={'/contact-me'} className="nav-link">
					contact me
				</Link>
			</div>
		</nav>
	);
}

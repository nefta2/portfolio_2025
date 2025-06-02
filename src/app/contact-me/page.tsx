import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});
export const metadata = {
	title: 'Contact Me',
};
export default function ContactMe() {
	return (
		<div
			className={`${spaceGrotesk.className} flex flex-col  gap-10 items-start  h-full mx-5 my-5 lg:mx-40`}
		>
			<h1 className="flex flex-row items-start w-full text-[30px]">
				Contact me.
			</h1>
			<h2 className="flex flex-col items-start">
				Below you can click on any of my social media to contact me.
			</h2>

			<div className="flex flex-col gap-20 items-center align-middle lg:flex-row lg:gap-10 justify-around w-full">
				<a
					href="https://github.com/nefta2"
					target="_blank"
					className="flex flex-col items-center gap-5"
				>
					<Image
						src="/github-mark-white.png"
						alt=""
						width={100}
						height={25}
						className="cursor-pointer"
						priority
					/>
					<h1>Github</h1>
				</a>

				<a
					href="https://linkedin.com/in/diego-nazar-burgos-álvarez-a05947210"
					target="_blank"
					className="flex flex-col items-center gap-5"
				>
					<Image
						src="/InBug-White.png"
						alt=""
						width={100}
						height={25}
						className="cursor-pointer"
						priority
					/>
					<h1>Linkedin</h1>
				</a>

				<a
					href="https://wa.me/50768335788"
					target="_blank"
					className="flex flex-col items-center gap-5"
				>
					<Image
						src="/whats-logo.png"
						alt=""
						width={100}
						height={25}
						className="cursor-pointer"
						priority
					/>
					<h1>Whatsapp</h1>
				</a>
			</div>
		</div>
	);
}

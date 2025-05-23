import { Space_Grotesk } from 'next/font/google';
import Gallery from '../components/gallery';

const spaceGrotesk = Space_Grotesk({
	weight: '300',
	subsets: ['latin'],
});
export const metadata = {
	title: 'Works',
};

export default function ContactMe() {
	const works = [
		{
			name: 'Art Gallery Website',
			description: 'Website for the paintings of an artist.',
			bgPhoto: 'work-art-gallery.png',
			tags: ['React', 'Javascript', 'Scss', 'Html'],
			about:
				'Art Gallery Website was a university project where I was tasked with building a website that integrated an AWS service. I created an online portfolio to showcase my dad’s paintings, allowing visitors to view his artwork and contact him for commissions. The site is currently deprecated due to the discontinuation of the AWS hosting service.',

			github: 'https://github.com/nefta2/gallery-art',
		},
		{
			name: 'Green Trades Design',
			description:
				'Prototype for an app dedicated to trading second hand products.',
			bgPhoto: 'work-green-trades.png',
			tags: ['Figma', 'UI/UX'],
			about:
				'Green Trades was a college project in which we developed a prototype for an app that facilitates online trading of second-hand products. I was responsible for designing the login and sign-up screens.',
			figma:
				'https://www.figma.com/proto/hSuPPy8KKudIshyfztvqcT/Green-Trades?node-id=166-3729&t=Y1Y33G24qyN8d4jA-1',
		},
		{
			name: 'One Portfolio By Diego Burgos',
			description: 'My personal portfolio website.',
			bgPhoto: 'works-diego-portfolio.gif',
			tags: ['Next.js', 'Javascript', 'Tailwind'],
			about:
				'I designed and developed my personal portfolio website with a focus on simplicity, clean layout, and intuitive navigation. My goal was to create a modern and distinctive design that incorporates current 2025 design trends, including subtle motion elements and interactive visuals.',
			github: 'https://github.com/nefta2/portfolio_2025',
		},
	];
	return (
		<div
			className={`${spaceGrotesk.className} flex flex-col  gap-10 items-center  h-full mx-5 my-5 lg:mx-40`}
		>
			<h1 className="flex flex-row items-start w-full text-[30px]">Works.</h1>

			<Gallery items={works} />
		</div>
	);
}

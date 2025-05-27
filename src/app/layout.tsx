import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavigationBar from './components/navigation-bar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	display: 'swap',
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: '1DB',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/DB.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header>
					<NavigationBar />
				</header>
				{children}
			</body>
		</html>
	);
}

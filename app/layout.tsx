import "@/styles/globals.css";
import 'node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import 'node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Footer from '@/components/Footer'
import style from '@/pages/Home/home.module.css';
import Image from "next/image";


export const metadata: Metadata = {
	title: {
		default: 'Pizzon',
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
			<div className={`${style.bodyImg} `}>
				<Image src="/image/header-img.png" width={200} height={20} alt="Vacter Image"/>
			</div>
						<Navbar />
						{children}
						<Footer/>
			</body>
		</html>
	);
}

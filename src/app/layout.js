import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "@/components";

export const metadata = {
	language: "EN",
	title: "LitRealm",
	subject: "LitRealm: Online Bookstore for Diverse Genres and Titles",
	description:
		"Discover the magic of reading at LitRealm, your online destination for an extensive range of books across genres. Browse, search, and find your next literary adventure at competitive prices with quick shipping.",
	keywords:
		"LitRealm, online bookstore, books, literature, reading, fiction, non-fiction, bestsellers, classics, new releases, children's books, self-help, biographies, ebooks, competitive prices, fast shipping",
	author: "Halil ALGUL, halibal95@gmail.com",
	designer: "Piton Technology, info@piton.com.tr",
	icons: {
		icon: "/images/icon/favicon.ico",
	},
};

const BodyFont = Manrope({
	subsets: ["latin"],
});

export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={BodyFont.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}

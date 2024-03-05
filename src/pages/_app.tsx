import type {AppProps} from 'next/app';
import "./../app/globals.css";
import {Inter} from "next/font/google";
import {appWithTranslation} from "next-i18next";

const roboto = Inter({
	subsets: ['latin'],
})


function MyApp({Component, pageProps}: AppProps) {
	return (
		<main className={roboto.className}>
			<Component {...pageProps} />
		</main>
	)
}

export default appWithTranslation(MyApp);


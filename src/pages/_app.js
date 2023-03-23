import Head from "next/head";
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
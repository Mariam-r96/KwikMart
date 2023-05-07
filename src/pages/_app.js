import Head from "next/head";
import '@/styles/globals.scss';
import Layout from '@/pages/layout.jsx';
import store from "../redux/store";
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,200;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
				<meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
			</Head>
			<Provider store={store}>
				<Layout>
				<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}
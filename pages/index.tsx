import Head from "next/head"
import { useEffect } from "react"

import { useDencrypt } from "use-dencrypt-effect"
import { LinkRow } from "../components/LinkRow"
import { Projects } from "../components/Projects"

import FadeIn from "react-fade-in"

export const dencryptOptions = {
	chars: [
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
	],
}

const Title = () => {
	const { result, dencrypt } = useDencrypt(dencryptOptions)

	useEffect(() => {
		dencrypt("Vizdun.github.io")
	}, [])

	return <h1>{result}</h1>
}

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Vizdun.github.io</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					httpEquiv="onion-location"
					content="http://vizdun765cadfgvy2fnig25fxgdnzinbsvkvd4aenpcbyw267kuchyqd.onion"
				/>
			</Head>

			<main>
				<FadeIn>
					<Title />
					<LinkRow />
					<Projects />
				</FadeIn>
			</main>
		</div>
	)
}

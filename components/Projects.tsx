import { useEffect, useState } from "react"
import useDencrypt from "use-dencrypt-effect"
import { dencryptOptions } from "../pages"
import styles from "./Projects.module.css"
import Git from "../svgs/git.svg"

import Jspp from "../svgs/jspp.svg"
import Ts from "../svgs/ts.svg"
import Webpack from "../svgs/webpack.svg"
import Css from "../svgs/css.svg"
import Html from "../svgs/html.svg"
import Js from "../svgs/js.svg"
import Pug from "../svgs/pug.svg"
import React from "../svgs/react.svg"
import Node from "../svgs/node.svg"
import Vue from "../svgs/vue.svg"
import Charts from "../svgs/charts.svg"
import Sass from "../svgs/sass.svg"
import Material from "../svgs/material.svg"
import { usePopperTooltip } from "react-popper-tooltip"

import Fader from "react-fader"
import FadeIn from "react-fade-in/lib/FadeIn"

enum ELanguage {
	jspp,
	ts,
	webpack,
	react,
	html,
	css,
	js,
	pug,
	node,
	vue,
	charts,
	sass,
	material,
}

interface ILanguage {
	name: string
}

const languages: ILanguage[] = [
	{
		name: "JS++",
	},
	{
		name: "Typescript",
	},
	{
		name: "Webpack",
	},
	{
		name: "React.js",
	},
	{
		name: "HTML",
	},
	{
		name: "CSS",
	},
	{
		name: "Javascript",
	},
	{
		name: "Pug",
	},
	{
		name: "Node",
	},
	{
		name: "Vue.js",
	},
	{
		name: "Charts.js",
	},
	{
		name: "Sass",
	},
	{
		name: "Material Design",
	},
]

interface IProject {
	name: string
	lang: ELanguage[]
	repo: string
	summary: string
}

const projects: IProject[] = [
	{
		name: "pongjspp",
		lang: [ELanguage.css, ELanguage.html, ELanguage.jspp, ELanguage.node],
		repo: "https://github.com/Vizdun/Vizdun.github.io/tree/main/pongjspp",
		summary: "Pong written in JS++.",
	},
	{
		name: "values-common",
		lang: [
			ELanguage.ts,
			ELanguage.css,
			ELanguage.html,
			ELanguage.pug,
			ELanguage.webpack,
			ELanguage.node,
		],
		repo: "https://github.com/Vizdun/values-common",
		summary: "Common framework for 8values style tests.",
	},
	{
		name: "values-common-editor",
		lang: [
			ELanguage.ts,
			ELanguage.css,
			ELanguage.html,
			ELanguage.react,
			ELanguage.webpack,
		],
		repo: "https://github.com/Vizdun/values-common-editor",
		summary: "Editor for values-common.",
	},
	{
		name: "starv",
		lang: [ELanguage.html, ELanguage.css, ELanguage.js],
		repo: "https://github.com/Vizdun/Vizdun.github.io/tree/main/starv",
		summary: "Starvation counter.",
	},
	{
		name: "tictactoe",
		lang: [ELanguage.html, ELanguage.css, ELanguage.js],
		repo: "https://github.com/Vizdun/Vizdun.github.io/tree/main/tictactoe",
		summary: "Tic-tac-toe.",
	},
	{
		name: "pcb-discord-bot",
		lang: [ELanguage.ts, ELanguage.node],
		repo: "https://github.com/Vizdun/pcb-discord-bot",
		summary: "A Discord bot made for the Polcompball server, never used.",
	},
	{
		name: "pcb-miraheze-utility-scripts",
		lang: [ELanguage.node],
		repo: "https://github.com/Vizdun/pcb-miraheze-utility-scripts",
		summary:
			"Scripts used to maintain the Polcompball and Polcompball Anarchy wikis.",
	},
	{
		name: "comments84",
		lang: [ELanguage.html, ELanguage.js],
		repo: "https://github.com/Vizdun/Vizdun.github.io/tree/main/comments84",
		summary:
			"Comment watcher for the Polcompball and Polcompball Anarchy wikis.",
	},
	{
		name: "VizValues",
		lang: [
			ELanguage.html,
			ELanguage.ts,
			ELanguage.charts,
			ELanguage.sass,
			ELanguage.vue,
			ELanguage.material,
			ELanguage.webpack,
		],
		repo: "https://github.com/Vizdun/Vizdun.github.io/tree/main/vizvalues",
		summary:
			"An 8values-like test written with some fancy technologies. (source code not avaible)",
	},
]

export function Project(props: {
	project: IProject
	shown: Function
	select: Function
}) {
	const { result, dencrypt } = useDencrypt(dencryptOptions)

	useEffect(() => {
		dencrypt(props.project.name)
	}, [])

	return (
		<div
			className={styles.project}
			onClick={(evt) => {
				if (evt.shiftKey) {
					window.open(props.project.repo, "_self")
				} else {
					props.select(props.project)
					props.shown(true)
				}
			}}
		>
			<p>{result}</p>
		</div>
	)
}

function LanguageSvg(lang: ELanguage, props: any) {
	switch (lang) {
		case ELanguage.css:
			return <Css {...props} />
		case ELanguage.html:
			return <Html {...props} />
		case ELanguage.js:
			return <Js {...props} />
		case ELanguage.node:
			return <Node {...props} />
		case ELanguage.pug:
			return <Pug {...props} />
		case ELanguage.react:
			return <React {...props} />
		case ELanguage.ts:
			return <Ts {...props} />
		case ELanguage.webpack:
			return <Webpack {...props} />
		case ELanguage.jspp:
			return <Jspp {...props} />
		case ELanguage.vue:
			return <Vue {...props} />
		case ELanguage.charts:
			return <Charts {...props} />
		case ELanguage.sass:
			return <Sass {...props} />
		case ELanguage.material:
			return <Material {...props} />
		default:
			return <Git {...props} />
	}
}

export function Language(props: { lang: ELanguage }) {
	const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
		usePopperTooltip()

	return (
		<div ref={setTriggerRef}>
			{LanguageSvg(props.lang, {
				className: "accountlink",
				fill: "#f5a9b8",
			})}
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: "tooltip-container" })}
				>
					{languages[props.lang].name}
				</div>
			)}
		</div>
	)
}

export function Projects() {
	const [shown, setShown] = useState(false)
	const [selectedProject, setSelectedProject] = useState(projects[0])

	const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
		usePopperTooltip()

	// const title = useDencrypt(dencryptOptions)
	// const summary = useDencrypt(dencryptOptions)
	// const languages = useDencrypt(dencryptOptions)

	// useEffect(() => {
	// 	title.dencrypt(selectedProject.name)
	// 	summary.dencrypt(selectedProject.summary)
	// 	languages.dencrypt("Languages")
	// })

	return (
		<div className={styles.container}>
			<Fader
				shouldTransition={(oldChildren: any, newChildren: any) => {
					if ((oldChildren && !newChildren) || (!oldChildren && newChildren)) {
						return true
					}
					return false
				}}
			>
				{shown && (
					<div
						className={styles.overlay}
						onClick={() => {
							setShown(false)
						}}
					>
						<div
							onClick={(e) => {
								e.stopPropagation()
							}}
						>
							<FadeIn className={styles.popup}>
								<h2>{selectedProject.name}</h2>
								<p>{selectedProject.summary}</p>
								<h2>Languages</h2>
								<div className={styles.langrow}>
									{selectedProject.lang
										.sort(function (a, b) {
											return a - b
										})
										.map((item, index) => {
											return <Language lang={item} key={index} />
										})}
								</div>
								<div ref={setTriggerRef}>
									<Git
										onClick={() => {
											window.open(selectedProject.repo, "_blank")
										}}
										className="accountlink"
										fill="#f5a9b8"
									/>
									{visible && (
										<div
											ref={setTooltipRef}
											{...getTooltipProps({ className: "tooltip-container" })}
										>
											Repository
										</div>
									)}
								</div>
							</FadeIn>
						</div>
					</div>
				)}
			</Fader>
			{projects.map((item, index) => {
				return (
					<Project
						key={index}
						project={item}
						shown={setShown}
						select={setSelectedProject}
					/>
				)
			})}
		</div>
	)
}

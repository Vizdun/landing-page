import discord from "../svgs/discord.svg"
import loverslab from "../svgs/loverslab.svg"
import github from "../svgs/github.svg"
import twitter from "../svgs/twitter.svg"
import reddit from "../svgs/reddit.svg"
import youtube from "../svgs/youtube.svg"
import bitcoin from "../svgs/bitcoin.svg"
import tor from "../svgs/tor.svg"
import { usePopperTooltip } from "react-popper-tooltip"
import copy from "copy-to-clipboard"
import { useState } from "react"

function Link(props: { url?: string; link: string; Icon: Function }) {
	const [recentlyCopied, setrecentlyCopied] = useState(false)

	const { getTooltipProps, setTooltipRef, setTriggerRef, visible, update } =
		usePopperTooltip()

	const svgProps = {
		fill: "#f5a9b8",
		ref: setTriggerRef,
	}

	return (
		<div
			className="accountlink"
			onClick={
				props.url
					? () => window.open(props.url, "_blank")
					: () => {
							copy(props.link ?? "")
							setrecentlyCopied(true)
							update && update()
							setTimeout(() => {
								setrecentlyCopied(false)
								update && update()
							}, 500)
					  }
			}
		>
			{props.Icon(svgProps)}
			{visible && (
				<div
					ref={setTooltipRef}
					{...getTooltipProps({ className: "tooltip-container" })}
				>
					{recentlyCopied ? "Copied!" : props.link}
				</div>
			)}
		</div>
	)
}

export function LinkRow() {
	return (
		<div className="linkrow">
			<Link Icon={github} link="Vizdun" url="https://github.com/Vizdun" />
			<Link
				Icon={tor}
				link="vizdun5qsioy6uvp57b4zihtjwkbqnmixjco6wzic6rayztvjogzimyd.onion"
			/>
			<Link Icon={discord} link="Miko#4118" />
			<Link
				Icon={reddit}
				link="u/Vizdun"
				url="https://www.reddit.com/user/Vizdun"
			/>
			<Link Icon={twitter} link="@vizdun" url="https://twitter.com/vizdun" />
			<Link
				Icon={youtube}
				link="Vizzy"
				url="https://www.youtube.com/channel/UCFd3eYK18NfSlppuB1ErZ9A"
			/>
			<Link Icon={loverslab} link="Vizdun" />
			<Link Icon={bitcoin} link="1VizdunDpuRQNQrgRSpjKDtmv9sgqA9eJ" />
		</div>
	)
}

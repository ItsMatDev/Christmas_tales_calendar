import { useState } from "react";
import "./Text.scss";

function Text({ content }) {
	const [nexttest, setNexttext] = useState(1);
	console.log(content);
	const handleClick = () => {
		setNexttext(nexttest + 1);
	};
	const handleClickmoins = () => {
		setNexttext(nexttest - 1);
	};
	return (
		<div className="pageconte">
			<h1 className="pageconte__titre">{content.title}</h1>
			{nexttest === 3 ? null : (
				<img
					className="nextpage"
					onClick={handleClick}
					src="https://assets.stickpng.com/images/6002fc0c51c2ec00048c6c7b.png"
					alt=""
				/>
			)}
			{nexttest === 1 ? null : (
				<img
					className="nextpagemoins"
					onClick={handleClickmoins}
					src="https://assets.stickpng.com/images/6002fc0c51c2ec00048c6c7b.png"
					alt=""
				/>
			)}

			{content && nexttest === 1 && (
				<>
					<p className="pageconte__text">
						<span className="firstLetter">
							{content.tale.firstPart[0]}
						</span>
						<span className="otherLetter">
							{content.tale.firstPart.slice(1)}
						</span>
					</p>
					<p className="partietext"> Pages 1 </p>
				</>
			)}
			{content && nexttest === 2 && (
				<>
					<p className="pageconte__text">{content.tale.secondPart}</p>
					<p className="partietext"> Pages 2 </p>
				</>
			)}
			{content && nexttest === 3 && (
				<>
					<p className="pageconte__text">{content.tale.thirdPart}</p>
					<p className="partietext"> Pages 3</p>
				</>
			)}
		</div>
	);
}

export default Text;

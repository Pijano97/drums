import React, { useEffect } from "react";
import "./Drum.css";

function Drums({ img, title, char }) {
	return (
		<div
			className="drum"
			style={{
				background: img,
			}}
		>
			<h1 className="drum__char">{char}</h1>
			<p className="drum__title">{title}</p>
		</div>
	);
}

export default Drums;

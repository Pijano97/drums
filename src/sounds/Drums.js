import React from "react";
import "./Drums.css";

function Drums({ title, char }) {
	return (
		<div className="drums">
			<h1 className="drums__char">{char}</h1>
			<p className="drums__title">{title}</p>
		</div>
	);
}

export default Drums;

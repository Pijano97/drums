import React, { useEffect, useState } from "react";
import "./Drums.css";
import useSound from "use-sound";
import boom from "./sounds/boom.wav";
import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openHat from "./sounds/openhat.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tink from "./sounds/tink.wav";
import tom from "./sounds/tom.wav";
import Drum from "./Drum";
import kickImg from "./img/kick.png";

function Drums() {
	const [char, setChar] = useState(65);

	let [boomSound] = useSound(clap);
	let [clapSound] = useSound(boom);
	let [hihatSound] = useSound(hihat);
	let [kickSound] = useSound(kick);
	let [openHatSound] = useSound(openHat);
	let [rideSound] = useSound(ride);
	let [snareSound] = useSound(snare);
	let [tinkSound] = useSound(tink);
	let [tomSound] = useSound(tom);

	useEffect(() => {
		const keyPressHandler = (e) => {
			setChar(e.keyCode);
			if (e.keyCode === 65) {
				console.log("a");
				// a
				boomSound(1);
			}
			if (e.keyCode === 83) {
				// s
				clapSound();
			}
			if (e.keyCode === 68) {
				// d
				hihatSound();
			}
			if (e.keyCode === 70) {
				// f
				kickSound();
			}
			if (e.keyCode === 74) {
				// j
				openHatSound();
			}
			if (e.keyCode === 75) {
				// k
				rideSound();
			}
			if (e.keyCode === 186) {
				// ;
				snareSound();
			}
			if (e.keyCode === 71) {
				// g
				tinkSound();
			}
			if (e.keyCode === 76) {
				// l
				tomSound();
			}
		};
		document.addEventListener("keydown", keyPressHandler);
		return () => {
			document.removeEventListener("keydown", keyPressHandler);
		};
	}, [char]);

	return (
		<div className="drums">
			{/*  */}
			<Drum img="kickImg" title={"BOOM"} char={"A"} />
			<Drum title={"CLAP"} char={"S"} />
			<Drum title={"HIHAT"} char={"D"} />
			<Drum title={"KICK"} char={"F"} />
			<Drum title={"TINK"} char={"G"} />
			<Drum title={"OPENHAT"} char={"J"} />
			<Drum title={"RIDE"} char={"K"} />
			<Drum title={"TOM"} char={"L"} />
			<Drum title={"SNARE"} char={";"} />
		</div>
	);
}

export default Drums;

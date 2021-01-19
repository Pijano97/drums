import "./App.css";
import React, { useEffect } from "react";
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
import Drums from "./sounds/Drums";

// const hitSound = (e) => {};

function App() {
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
			if (e.keyCode === 65) {
				console.log("a");
				// a
				boomSound();
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
	}, []);

	return (
		<div className="app">
			<div className="app__drums">
				<Drums title={"BOOM"} char={"A"} />
				<Drums title={"CLAP"} char={"S"} />
				<Drums title={"HIHAT"} char={"D"} />
				<Drums title={"KICK"} char={"F"} />
				<Drums title={"TINK"} char={"G"} />
				<Drums title={"OPENHAT"} char={"J"} />
				<Drums title={"RIDE"} char={"K"} />
				<Drums title={"TOM"} char={"L"} />
				<Drums title={"SNARE"} char={";"} />
			</div>
		</div>
	);
}

export default App;

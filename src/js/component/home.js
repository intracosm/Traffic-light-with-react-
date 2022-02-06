import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	const [color, setcolor] = useState("red");
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={color == "red" ? "gred" : "red"}
					onClick={(e) => setcolor("green")}></div>
				<div
					className={color == "yellow" ? "gyellow" : "yellow"}
					onClick={(e) => setcolor("red")}></div>
				<div
					className={color == "green" ? "ggreen" : "green"}
					onClick={(e) => setcolor("yellow")}></div>
			</div>
		</div>
	);
};

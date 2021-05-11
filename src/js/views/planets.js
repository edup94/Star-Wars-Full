import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards.js";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<h2 className="text-white d-flex justify-content-center">Planets</h2>
			<div className="row justify-content-around">
				{store.planets.map((element, i) => {
					return (
						<Cards
							key={i}
							imgURL={"https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg"}
							name={element.name}
							img={element.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

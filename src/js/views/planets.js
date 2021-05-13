import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/planetCard.js";
import { useParams } from "react-router-dom";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-white d-flex justify-content-center">Planets</h2>
			<div className="row justify-content-around">
				{store.planets.map((element, i) => {
					return (
						<PlanetCard
							key={i}
							position={i}
							imgURL={store.planetImg[i].imgURL}
							name={element.name}
							img={element.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

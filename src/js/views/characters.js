import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { PersonCard } from "../component/personCard.js";
import { useParams } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mt-5">
			<h2 className="text-white d-flex justify-content-center">Characters</h2>
			<div className="row justify-content-around">
				{store.characters.map((element, i) => {
					return (
						<PersonCard
							key={i}
							position={i}
							imgURL={store.characterImg[i].imgURL}
							name={element.name}
							img={element.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

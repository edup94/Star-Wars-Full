import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Cards } from "../component/cards.js";
import { useParams } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	return (
		<div className="container mt-5">
			<h2 className="text-white d-flex justify-content-center">Characters</h2>
			<div className="row justify-content-around">
				{store.characters.map((element, i) => {
					return (
						<Cards
							key={i}
							position={i}
							imgURL="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg?w=1560&ssl=1"
							name={element.name}
							img={element.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

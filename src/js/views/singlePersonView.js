import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SinglePerson } from "../component/singlePerson";

export function SinglePersonView(props) {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	return (
		<div>
			{store.singleCharacter.map((element, i) => {
				return (
					<SinglePerson
						key={i}
						position={i}
						name={element.name}
						gender={element.gender}
						birth_year={element.birth_year}
						height={element.height}
						mass={element.mass}
						homeworld={element.homeworld}
					/>
				);
			})}
		</div>
	);
}

SinglePersonView.propTypes = {
	match: PropTypes.object
};

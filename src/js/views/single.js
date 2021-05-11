import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SingleCard } from "../component/singleCard";

export function Single(props) {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	return (
		<div className="">
			{store.singleCharacter.map((element, i) => {
				return (
					<SingleCard
						key={i}
						imgURL={""}
						name={element.name}
						gender={element.gender}
						birth_year={element.birth_year}
						height={element.height}
						mass={element.mass}
						homeworld={element.homeworld}
						theid={theid}
					/>
				);
			})}
		</div>
	);
}

Single.propTypes = {
	match: PropTypes.object
};

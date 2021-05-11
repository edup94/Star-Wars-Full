import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export function SingleCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-4">
			<div className="card luz my-5">
				<img src={props.theid} className="card" />
				<div className="card-body">
					<h4 className="card-title text-white text-center">{store.singleCharacter.name}</h4>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<ul>
						<li>Birth Year: {store.singleCharacter.birth_year}</li>
						<li>Gender: {store.singleCharacter.gender}</li>
						<li>Height: {store.singleCharacter.height}</li>
						<li>Mass: {store.singleCharacter.mass}</li>
						<li>{/* Homeworld: <Link to={`/planets/${theid}`}>{props.homeworld}</Link> */}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

SingleCard.propTypes = {
	// match: PropTypes.object,
	theid: PropTypes.number,
	name: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number,
	mass: PropTypes.number,
	homeworld: PropTypes.string
};

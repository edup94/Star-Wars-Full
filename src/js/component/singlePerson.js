import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function SinglePerson(props) {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	return (
		<div className="d-flex justify-content-center">
			<div className="col-4">
				<div className="card luz1 my-5">
					<img src={store.characterImg[theid].imgURL} style={{ height: 550 }} />
					<div className="card-body">
						<h3 className="card-title text-white text-center">{store.singleCharacter.name}</h3>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<ul>
							<li>Birth Year: {store.singleCharacter.birth_year}</li>
							<li>Gender: {store.singleCharacter.gender}</li>
							<li>Height: {store.singleCharacter.height}</li>
							<li>Mass: {store.singleCharacter.mass}</li>
							<li>
								HomeWorld:{" "}
								<Link to={"/planets/" + theid}>
									Go to HomeWorld
									{store.singlePlanet.homeworld}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

SinglePerson.propTypes = {
	name: PropTypes.string,
	birth_year: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number,
	mass: PropTypes.number,
	homeworld: PropTypes.string,
	position: PropTypes.number
};

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export function SinglePlanet(props) {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	return (
		<div className="d-flex justify-content-center">
			<div className="col-4">
				<div className="card luz2 my-5">
					<img src={store.planetImg[theid].imgURL} />
					<div className="card-body">
						<h3 className="card-title text-white text-center">{store.singlePlanet.name}</h3>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<ul>
							<li>Diameter: {store.singlePlanet.diameter}</li>
							<li>Rotation period: {store.singlePlanet.rotation_period}</li>
							<li>Orbital period: {store.singlePlanet.orbital_period}</li>
							<li>Gravity: {store.singlePlanet.gravity}</li>
							<li>Population: {store.singlePlanet.population}</li>
							<li>Climate: {store.singlePlanet.climate}</li>
							<li>Terrain: {store.singlePlanet.terrain}</li>
							<li>Surface Water: {store.singlePlanet.surface_water}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

SinglePlanet.propTypes = {
	// match: PropTypes.object,
	name: PropTypes.string,
	diameter: PropTypes.number,
	rotation_period: PropTypes.number,
	orbital_period: PropTypes.number,
	gravity: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.number
};

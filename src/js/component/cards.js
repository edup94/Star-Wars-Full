import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function Cards(props) {
	const { store, actions } = useContext(Context);
	return (
		// <div className="row">
		<div className="col-4">
			<div className="card luz my-5">
				<img src={props.imgURL} className="card" />
				<div className="card-body">
					<h5 className="card-title text-white text-center">{props.name}</h5>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<Link to={`/characters/` + props.position} className="btn btn-dark btn-outline-light">
						<p className="card-text" onClick={() => actions.moreDetails(props.position + 1)}>
							+ Details
						</p>
					</Link>
					<button className="btn btn-outline-light">
						<i className="fas fa-star d-none" />
						<i className="far fa-star" />
					</button>
				</div>
			</div>
		</div>
		// </div>
	);
}
Cards.propTypes = {
	name: PropTypes.string,
	imgURL: PropTypes.string,
	theid: PropTypes.number,
	position: PropTypes.number
};

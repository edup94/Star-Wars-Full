import React, { useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export function PersonCard(props) {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-4">
			<div className="card luz1 my-5">
				<img src={props.imgURL} style={{ height: 450 }} />
				<div className="card-body">
					<h3 className="card-title text-white text-center">{props.name}</h3>
				</div>
				<div className="card-footer d-flex justify-content-around">
					<Link to={"/characters/" + props.position} className="btn btn-dark btn-outline-light">
						<h5 className="card-text" onClick={() => actions.moreDetails(props.position + 1)}>
							+ Details
						</h5>
					</Link>
					<button className="btn btn-outline-light" onClick={() => actions.addFavorite(props.name)}>
						<i className="fas fa-star d-none" />
						<i className="far fa-star" />
					</button>
				</div>
			</div>
		</div>
	);
}
PersonCard.propTypes = {
	name: PropTypes.string,
	imgURL: PropTypes.string,
	position: PropTypes.number
};

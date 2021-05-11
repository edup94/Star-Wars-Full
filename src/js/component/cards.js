import React from "react";
import PropTypes from "prop-types";

export function Cards(props) {
	return (
		// <div className="row">
		<div className="col-4">
			<div className="card luz my-5">
				<img src={props.imgURL} className="card" />
				<div className="card-body">
					<h5 className="card-title text-white text-center">{props.name}</h5>
				</div>
				<div className="card-footer d-flex justify-content-between">
					<a href="#" className="btn btn-dark btn-outline-light">
						<p className="card-text">+ Details</p>
					</a>
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
	imgURL: PropTypes.string
};

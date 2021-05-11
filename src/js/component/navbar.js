import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		// <nav classNameName="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span classNameName="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>
		// 	<div classNameName="ml-auto">
		// 		<Link to="/demo">
		// 			<button classNameName="btn btn-primary">Check the Context in action</button>
		// 		</Link>
		// 	</div>
		// </nav>
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link to="/planets" className="nav-link active" href="#">
					<p>Planets</p>
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/characters" className="nav-link active" href="#">
					<p>Characters</p>
				</Link>
			</li>
		</ul>
	);
};

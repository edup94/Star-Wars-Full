import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SinglePlanet } from "../component/singlePlanet";

export function SinglePlanetView(props) {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();
    return (
        <div>
            {store.singlePlanet.map((element, i) => {
                return (
                    <SinglePlanet
                        key={i}
                        position={i}
                        name={element.name}
                        diameter={diameter}
                        rotation_period={rotation_period}
                        orbital_period={orbital_period}
                        gravity={gravity}
                        climate={climate}
                        terrain={terrain}
                        surface_water={surface_water}
                    />
                );
            })}
        </div>
    );
}

SinglePlanetView.propTypes = {
    match: PropTypes.object
};

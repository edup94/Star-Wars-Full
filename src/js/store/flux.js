import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const [showError, setShowError] = useState(false);
	return {
		store: {
			characters: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(response => setStore({ characters: response.results }))
					.catch(error => console.log(true));
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(response => setStore({ planets: response.results }))
					.catch(error => console.log(true));

				//reset the global store
				// setStore({ demo: demo });
			}
		}
	};
};

export default getState;

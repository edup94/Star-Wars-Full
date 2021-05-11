import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const [showError, setShowError] = useState(false);
	let personajes = "https://www.swapi.tech/api/people/";
	let planetas = "https://www.swapi.tech/api/planets/";
	return {
		store: {
			characters: [],
			planets: [],
			singleCharacter: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				fetch(personajes)
					.then(response => response.json())
					.then(response => setStore({ characters: response.results }))
					.catch(error => console.log(true));
				fetch(planetas)
					.then(response => response.json())
					.then(response => setStore({ planets: response.results }))
					.catch(error => console.log(true));

				//reset the global store
				// setStore({ demo: demo });
			},
			moreDetails: id => {
				let numIndex = "https://www.swapi.tech/api/people/" + id;
				console.log(numIndex + "yo soy tu papu");
				fetch(numIndex)
					.then(response => response.json())
					.then(response => setStore({ singleCharacter: response.result.properties }))
					.catch(error => console.log(true));
			}
		}
	};
};

export default getState;

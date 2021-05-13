import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	const [showError, setShowError] = useState(false);
	let personajes = "https://www.swapi.tech/api/people/";
	let planetas = "https://www.swapi.tech/api/planets/";
	return {
		store: {
			characters: [],
			planets: [],
			singleCharacter: [],
			singlePlanet: [],
			favorites: [],
			characterImg: [
				{
					imgURL: "https://i.pinimg.com/564x/f2/33/6e/f2336e0bf572770c812a96833ee3eac8.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/65/9d/c0/659dc059e63a5decab7f62c2a6ccda70.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/79/76/df/7976df58037328a501812056571332ee.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/a1/88/01/a18801ff2cc1e27fda55531b25ef0419.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/00/32/45/0032456ed9d8f83bf3488c9a0a32efd4.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/1f/fb/93/1ffb93a66d8f80f27eafd56fa97c732c.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/f5/b8/ca/f5b8ca268a10a6d32c8e27631f69800f.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/90/d2/d3/90d2d34bf3e0ff5a6b1b21007adfc1d1.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/6f/af/f5/6faff53893397e147cec1a82253ff2d7.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/2c/8f/8f/2c8f8f715c7ad3a8dfe8846cc60c049e.jpg"
				}
			],
			planetImg: [
				{
					imgURL: "https://i.pinimg.com/564x/6c/af/1d/6caf1d2c052371214fb284bcb0e22182.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/7c/2a/38/7c2a38f7fc8c290f399a35a7ad599a66.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/0c/08/cd/0c08cdc198931c38dda8050bbc304992.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/c4/7d/ef/c47defcd8dcd47c66de1da67931b9d97.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/3c/b3/7c/3cb37c71566cf5809240c50ed4f6ffb9.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/d5/28/96/d52896026629c641dc399cfb71dac11e.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/fc/91/1d/fc911db381f2bbe4f13c9f3d90ee562b.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/2c/63/1f/2c631fe9017013f00cc8cc665b06cbe6.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/cd/81/db/cd81db90d2a40ab17ab3401cbaeab153.jpg"
				},
				{
					imgURL: "https://i.pinimg.com/564x/ff/0c/4a/ff0c4ac808b7f0fe1808545de3418e46.jpg"
				}
			]
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
			},
			moreDetails: id => {
				let numIndex = "https://www.swapi.tech/api/people/" + id;
				fetch(numIndex)
					.then(response => response.json())
					.then(response => setStore({ singleCharacter: response.result.properties }))
					.catch(error => console.log(true));

				let numIndex2 = "https://www.swapi.tech/api/planets/" + id;
				fetch(numIndex2)
					.then(response => response.json())
					.then(response => setStore({ singlePlanet: response.result.properties }))
					.catch(error => console.log(true));
			},
			addFavorite: fav => {
				let store = getStore();
				setStore({ favorites: [...store.favorites, fav] });
			},
			deleteFavorite: fav => {
				function eliminarFav(guardarArray) {
					if (guardarArray === fav) {
						return false;
					} else return true;
				}
				let store = getStore();
				let guardarArray = store.favorites.filter(eliminarFav);
				setStore({ favorites: guardarArray });
			}
		}
	};
};

export default getState;

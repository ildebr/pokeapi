
//function that interacts with the api and returns a random pokemon
const generatePokemonFromApi = () => {

//This sets the data that we're going to retrieve from the API
const apiData = {
	url: 'https://pokeapi.co/api/v2',
	type: 'pokemon',
	//id: '200'
	id: (Math.floor(Math.random() * 899)).toString()
}

const {url, type, id} = apiData;

//this formats the retrieved data to a url 

const apiUrl = `${url}/${type}/${id}`


console.log(apiUrl)
//fetch the api and retrieves the pokemon 
fetch(apiUrl)
.then( (data) => data.json() )
.then( (pokemon) => generateHtml(pokemon) )

//this generates the HTML that is going to be appended to the div.pokemon-container

const generateHtml = (data) =>{
	console.log(data)
	const html = `
	<div class="pokemon">
		<h3 class="name"> ${data.name} </h3>
		<img class="poke-img" src="${data.sprites.front_default}">
		<div class ="details">
			<span> Height: ${data.height} </span>
			<span> Weight: ${data.weight} </span>
	 	</div>
	 </div>
 	`
 	const pokemonDiv = document.querySelector('.pokemon-container');
	//pokemonDiv.innerHTML = html;
	$(pokemonDiv).append(html)
}

}

generatePokemonFromApi()
generatePokemonFromApi()
generatePokemonFromApi()
generatePokemonFromApi()

generatePokemonFromApi()
generatePokemonFromApi()

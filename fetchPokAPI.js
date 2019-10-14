//DATA van pokemon API
const allPokemonRequest = async (pokeName) => {


    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

    const resp = await fetch(url);
    const pokeData = await resp.json();


    // console.log(pokeData)
    return pokeData;

}


// allPokemonRequest("bulbasaur").then(data => {

//     return data

// }).then(data => {
//     console.log(data.id)
//     console.log(data.name)
//     console.log(data.moves)
// }).catch(err => console.log(err));


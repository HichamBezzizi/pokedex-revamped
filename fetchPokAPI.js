//DATA van pokemon API
const allPokemonRequest = async (pokeName) => {


    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const resp = await fetch(url);
    const pokeData = await resp.json();


    return pokeData;

}



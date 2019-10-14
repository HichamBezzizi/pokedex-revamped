//DOM
const searchPokemon = document.querySelector('form');
const pokeDetails = document.getElementById('pokemon');

const pokeSearch = async (pokemon) => {

    const pokePic = pokemon.sprites.front_default;
    const pokeName = pokemon.name
    const pokeID = pokemon.id
    const pokeMoves = pokemon.moves
    const pokeType = pokemon.types


    if (pokemon.types.length < 2) {

        return pokeDetails.innerHTML = `
        <img id="pokePic" src=" ${pokePic} >
        <h3>ID:  ${pokeID} </h3>
        <h3 class="pokeName">Name: ${pokeName}  </h3>
        <h4> Moves:
            <ul class="moves">
                <li>${pokeMoves[0].move.name}</li>
                <li>${pokeMoves[1].move.name}</li>
                <li>${pokeMoves[2].move.name}</li>
                <li>${pokeMoves[3].move.name}</li>
            </ul>
        </h4>
        <h4>Type:
            <ul class="moves">
                <li>${pokeType[0].type.name} </li>
            </ul>
        </h4>
        `;
    } else {

        return pokeDetails.innerHTML = ` 
        <img id="pokePic" src=" ${pokePic}" >
        <h3>ID:  ${pokeID} </h3>
        <h3 class="pokeName">Name: ${pokeName}  </h3>
        <h4> Moves:
            <ul class="moves">
                <li>${pokeMoves[0].move.name}</li>
                <li>${pokeMoves[1].move.name}</li>
                <li>${pokeMoves[2].move.name}</li>
                <li>${pokeMoves[3].move.name}</li>
            </ul>
        </h4>
        <h4>Type:
            <ul class="moves">
                <li>${pokeType[0].type.name} </li>
                <li>${pokeType[1].type.name} </li>
            </ul>
        </h4>
        `;
    }

};

// if (pokeDetails.hasAttribute('id')) {
//     pokeDetails.removeAttribute('id');
// }

searchPokemon.addEventListener("submit", (e) => {
    e.preventDefault();

    const pokemon = searchPokemon.pokemon.value.toLowerCase().trim()
    searchPokemon.reset();

    allPokemonRequest(pokemon)
        .then(data => pokeSearch(data))
        .catch(err => console.log(err))

});
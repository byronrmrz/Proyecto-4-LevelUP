const pokemonContainer = document.getElementById(`pokemon-container`); //probar con id y con alt 96

function fetchPokemon(id) { //cambiar a traer pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
    crearPokemon(data);
    }); 
}
function fetchPokemons(number) { //cambiar a traer pokemones
    for(var i = 0; i <= number; i++) {
        fetchPokemon(i)
    }    
}
function crearPokemon(pokemon) {
    const card = document.createElement(`div`);
    card.classList.add(`pokemon-block`);

    const spriteContainer  = document.createElement(`div`)
    spriteContainer.classList.add(`img-container`)

    const sprite = document.createElement(`img`);
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const peso = document.createElement(`p`);
    peso.classList.add(`weight`);
    peso.textContent = `Peso ${pokemon.weight.toString()} Kg`;

    const ability = document.createElement(`p`);
    ability.classList.add(`ability`);
    ability.textContent = `Habilidad: ${pokemon.abilities[0].ability.name}`

    const name = document.createElement(`p`);
    name.classList.add(`name`);
    name.textContent = pokemon.name;

    card.appendChild(name);
    card.appendChild(spriteContainer);
    card.appendChild(peso);
    card.appendChild(ability);

    pokemonContainer.appendChild(card);
}
fetchPokemons(6)
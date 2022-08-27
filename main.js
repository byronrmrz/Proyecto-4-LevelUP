const pokemonContainer = document.getElementById(`pokemon-container`); //probar con id y con alt 96

function fetchPokemon(url) { //cambiar a traer pokemon
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    crearPokemon(data);
    }); 
}

function getPokemonsRandom(pokemons, limit) {
    const shuffled = [...pokemons].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, limit);
}

function fetchPokemons() { //cambiar a traer pokemones
    fetch(`http://pokeapi.co/api/v2/pokemon/?limit=1154`)
        .then((res) => res.json())
        .then((data) => {
            const randomPokemonResult = getPokemonsRandom(data.results, 6)
            randomPokemonResult.forEach(pokemon => {
                fetchPokemon(pokemon.url)
            });
        }) 
}

function crearPokemon(pokemon) {
    console.log('pokemon', pokemon)
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

fetchPokemons()
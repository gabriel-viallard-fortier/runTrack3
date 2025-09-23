
async function fillTypes() {
  const response = await fetch('./pokemon.json');
  const pokemonData = await response.json();
  
  pokemonTypeSet = new Set();
  
  pokemonData.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      pokemonTypeSet.add(type);
    });
  });
  const typeSelectElement = document.querySelector("#type");
  pokemonTypeSet.forEach((type) => {
    const typeOptionElement = document.createElement("option");
    typeOptionElement.innerText = type;
    typeSelectElement.append(typeOptionElement);
  });
}

async function filterPokemon() {
  const response = await fetch('./pokemon.json');
  const pokemonData = await response.json();

  const idInput = document.getElementById('id');
  const nameInput = document.getElementById('name');
  const typeInput = document.getElementById('type');

  
  pokemonData.forEach((pokemon) => {
    if (idInput.value !== '' && idInput.value == pokemon.id) {
      result = pokemon;
    }
    if (nameInput.value !== '' && (nameInput.value.toLowerCase() == result.name.english.toLowerCase() ||
    nameInput.value.toLowerCase() == pokemon.name.french.toLowerCase())) {
      result = pokemon;
    }
    if (typeInput.value !== '') {
      pokemon.type.forEach((type) => {
        if (typeInput.value == type && typeInput.value == result.type) {
          result = pokemon;
        }
      });
    }
  });
  console.log(result);
}
fillTypes();
let result = [];
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  filterPokemon();
    event.preventDefault(); // Empêcher la soumission par défaut
  });
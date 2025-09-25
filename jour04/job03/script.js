
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

  const idInput = document.getElementById('id').value.trim();
  const nameInput = document.getElementById('name').value.trim();
  const typeInput = document.getElementById('type').value;

  let result = pokemonData.filter((pokemon) => {
    let match = true;

    // Filtre par ID
    if (idInput !== '') {
      match = match && (pokemon.id.toString() === idInput);
    }
    // Filtre par nom (fr/en)
    if (nameInput != '') {
      match = match && (pokemon.name.english.toLowerCase() === nameInput.toLowerCase() ||
                        pokemon.name.french.toLowerCase() === nameInput.toLowerCase());
    }
    // Filtre par type
    if (typeInput !== '') {
      match = match && (pokemon.type.some((type) => type === typeInput));
    }
    return match;
  });

  return result;
}


fillTypes();

document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  let data = await filterPokemon();
  const para = document.getElementById('para');
  para.innerHTML = '';

  if (data.lenght < 1) {
    para.innerText = "Aucun Pokemon trouvé avec ces critères";
  }
  else {

    data.forEach((pokemon) => {
      const element = document.createElement('p');
      element.classList.add("pokemon-card");
      element.innerHTML = `
        #${pokemon.id} <br>
        ${pokemon.name.english} / ${pokemon.name.french} <br>
        (${pokemon.type.join(', ')}) <br>
        ${pokemon.base.HP} |
         ${pokemon.base.Attack} |
          ${pokemon.base.Defense} |
           ${pokemon.base['Sp. Attack']} |
            ${pokemon.base['Sp. Defense']} |
            ${pokemon.base.Speed}`;
    para.appendChild(element);
    });
    
    
  }
});

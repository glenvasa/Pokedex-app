let pokemonRepository = (function () {
  let repository = [
    { name: 'Vulpix', height: 0.6, types: ['fire']},
    { name: 'Eevee', height: 0.3, types: ['normal']},
    { name: 'Arcanine', height: 1.9, types: ['fire']}
  ];

  function getAll () {
    return repository;
  }

  function add(pokemon) {
    if (typeof(pokemon) === 'object') {
      repository.push(pokemon);
    } else {
      document.write('You didn\'t enter valid Pokemon data');
    }
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    pokemonListItem.appendChild(button);
    pokemonList.appendChild(pokemonListItem);
    button.addEventListener('click', function (event){
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll : getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add(
  { name: 'Charizard', height: 1.7, types: ['fire', 'flying']}
);

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// console.log(pokemonRepository.getAll());

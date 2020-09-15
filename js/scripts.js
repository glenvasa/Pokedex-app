let pokemonRepository = (function () {
  let pokemonList = [
  { name: 'Vulpix', height: 0.6, types: ['fire']},
  { name: 'Eevee', height: 0.3, types: ['normal']},
  { name: 'Arcanine', height: 1.9, types: ['fire']}
];

  function getAll () {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll : getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height < 1.5) {
  document.write('<p>name: ' + pokemon.name + '<br>height: ' + pokemon.height + '<br>types: ' + pokemon.types + '</p>');
} else {
  document.write('<p>name: ' + pokemon.name + '<br>height: ' + pokemon.height + '  (WOW! That\'s a big Pokemon!)' + '<br>types: ' + pokemon.types + '</p>');
}
});

let pokemonList = [
  { name: 'Vulpix', height: 0.6, types: ['fire']},
  { name: 'Eevee', height: 0.3, types: ['normal']},
  { name: 'Arcanine',height: 1.9, types: ['fire']}
];

pokemonList.forEach(function(pokemon) {
  document.write('<p>name: ' + pokemon.name + '<br>height: ' + pokemon.height + '<br>types: ' + pokemon.types + '</p>');
});

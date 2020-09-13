let pokemonList = [];
pokemonList = [
  { name: 'Vulpix',
    height: 0.6,
    types: ['fire']
  },
  { name: 'Eevee',
    height: 0.3,
    types: ['normal']
  },
  { name: 'Arcanine',
    height: 1.9,
    types: ['fire'] },
];


for (let i=0; i < pokemonList.length; i++) {
// sets threshold for big pokemon at > 1.5
  if (pokemonList[i].height > 1.5)
    {document.write("<p> " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow! That's a big Pokemon! </p>");
  }
  else {document.write("<p> " + pokemonList[i].name + " (height: " + pokemonList[i].height + ") </p>");
  }
}

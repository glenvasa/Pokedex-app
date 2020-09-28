let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let $pokemonList = $('ul')
  let $modalContainer = $('#modal-container');

  function getAll () {
    return repository;
  }

  function add(pokemon) {
    if (typeof(pokemon) === 'object') {
      repository.push(pokemon);
    } else {
      console.log('You didn\'t enter valid Pokemon data');
    }
  }

  function addListItem(pokemon) {
    let $listItem = $('<li></li>');
    $pokemonList.append($listItem);
    let $button = $('<button type="button" id="pokemon-name" class="btn btn-default btn-lg btn-block list-group-item list-group-item-action col-12 pokemon-button" data-toggle="modal" data-target="#exampleModal"></button>');
    $button.text(pokemon.name)
    $listItem.append($button);
    $button.on('click', function () {showDetails(pokemon);});

  }

  function loadList() {
    return $.ajax(apiUrl, {dataType: 'json'}).then(function(item) {
      $.each(item.results, function(i, item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let $url = item.detailsUrl;
    return $.ajax($url).then(function(details) {
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.weight = details.weight;
      item.height = details.height;
      // item.types = Object.keys(details.types);
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name +  "</h1>");
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);
    let heightElement = $("<h5>" + "height: " + item.height + "</h5>");
    let weightElement = $("<h5>" + "weight: " + item.weight + "</h5>");
    // let typesElement = $("<p>" + "types: " + item.types + "</p>");
    // let abilititesElement = $("<p>" + "abilities: " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    // modalBody.append(typesElement);
    // modalBody.append(abilitiesElement);

  }

  function hideModal() {
    $modalContainer.removeClass('is-visible');}
    $(document).keydown(function (e) {  if (e.key === 'Escape') { hideModal();} });
    $modalContainer.click(function() {hideModal()} );

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  return {
    getAll : getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
    showDetails: showDetails
  };
})();

// Search for specific pokemon
$(document).ready(function(){
  $('#pokemon-search').on('keyup', function() {
    let value = $(this).val().toLowerCase();
    $('.list-group-item').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

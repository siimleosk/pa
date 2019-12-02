$(function () {
    var pokeApiUrl = "https://pokeapi.co/api/v2/generation/1/";
    $.getJSON(pokeApiUrl).done(function (data) {
        console.log(data);
        $.each(data.pokemon_species, function (index, pokemon) {
            var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            var par = $("<p>").html("Pokemoni liigi number " + (index + 1) + " on " + name);
            par.appendTo("#pokemon");
        });
    }).fail(function () {
        console.log("Pokeapi pole kättesaadav");
    }).always(function () {
        console.log("Pokemon on äge");
    });
});
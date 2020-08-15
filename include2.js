const API_URL = "https://starwars.egghead.training/"

const output = document.getElementById("output");

output.innerText = "Loading";

fetch(API_URL + "films")
    .then(response => response.json())
    .then(films => {
        let films_list = films.sort((a, b) => a.episode_id - b.episode_id)
            .map((film) => `${film.episode_id}. ${film.title}`)
            .join("\n");
        output.innerText = films_list;
    })


//const API_URL = "https://starwars.egghead.training/"

const API_URL = "https://www.breakingbadapi.com/api/"

const output = document.getElementById("output");

output.innerText = "Loading";

fetch(API_URL + "characters")
    .then(response => {
        if (!response.ok) {
            throw Error("Unsuccessful");
        }
        return response.json().then(characters => {
            output.innerText = getCharactersList(characters);
        })
    })
    .catch(error => {
        output.innerText = ":(";
        console.log(error);
    })

function getCharactersList(characters) {
    return characters.sort((a, b) => a.char_id - b.char_id)
        .map((character) => `${character.char_id}. ${character.name}`)
        .join("\n");

}

// Region Setup

const API_URL = "https://www.breakingbadapi.com/api/"

const output = document.getElementById("output");
const spinner = document.getElementById("spin")

function getCharactersList(characters) {
    return characters.sort((a, b) => a.char_id - b.char_id)
        .map((character) => `${character.char_id}. ${character.name}`)
        .join("\n");

}
//RegionEnd
function queryAPI(endpoint) {
    return fetch(API_URL + endpoint)
        .then(response => {
            return response.ok ? response.json() : Promise.reject(new Error("Unsuccessful"));
        }
        )
}

async function main() {
    try {
        const [characters, episodes] = await Promise.all([
            queryAPI('characters'),
            queryAPI('episodes')]);
        const characters_length = `${characters.length} characters`;
        const episodes_length = `${episodes.length} episodes`;
        output.innerText = `${characters_length} characters,${episodes_length} episodes`

    }
    catch (error) {
        output.innerText = ":(";
        console.log(error);
    }
    finally {
        spinner.remove();
    }

}
main();
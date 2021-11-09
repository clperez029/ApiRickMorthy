

const api_rickandmorthy = 'https://rickandmortyapi.com/api'

function getCharacter () {
    fetch (`${api_rickandmorthy}/character`)
    .then(res => res.json())
    .then(data => {
        let character = data.results;
        let id;
        let name;
        let img;
        let specie;
        let gender;

        character.forEach((i) => {
        id = i.id;
        name = i.name;
        img = i.image;
        specie = i.species;
        gender = i.gender;
        
        let add_card = document.getElementById('cont-cards');
        add_card.innerHTML += `
        <div class="card">
        <h3>${name}</h3>
        <img src="${img}" alt="${name}">
        <p class="specie">${specie}</p>
        <p class="specie">${gender}</p>
        </div>
        `
        })
    })
}

window.onload =getCharacter();



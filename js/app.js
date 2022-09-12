const selectedCharacters = document.getElementById("selectcharacters")
const namecharacter = document.getElementById("nomCharacter")
const imgcharacter = document.getElementById("imgCharacter")
const speciecharacter = document.getElementById("specieCharacter")
const genderCharacter = document.getElementById("genderCharacter")

const api_rickandmorthy = 'https://rickandmortyapi.com/api'

console.log("selectedCharacters ----- > ", selectedCharacters.value);

selectedCharacters.addEventListener('change', ()=>{
    let actualcharacter = selectedCharacters.value
    if (actualcharacter > 0){
        fetch (`${api_rickandmorthy}/character/${actualcharacter}`,
        {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'})
        .then(res => res.json())
        .then(data => {console.log(data)
            namecharacter.textContent = data.name
            imgcharacter.setAttribute('src', data.image)
            speciecharacter.textContent = data.species
            genderCharacter.textContent = data.gender
        })
    }
})

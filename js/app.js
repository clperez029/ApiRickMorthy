const selectedCharacters = document.getElementById("selectcharacters")
const namecharacter = document.getElementById("nomCharacter")
const imgcharacter = document.getElementById("imgCharacter")
const speciecharacter = document.getElementById("specieCharacter")
const genderCharacter = document.getElementById("genderCharacter")

const api_rickandmorthy = 'https://rickandmortyapi.com/api'
console.log(selectedCharacters)

selectedCharacters.addEventListener('change', ()=>{
    console.log('cambie!!!')
    let actualcharacter = selectedCharacters.value
    console.log(actualcharacter)
    if (actualcharacter > 0){
        fetch (`${api_rickandmorthy}/character/${actualcharacter}`)
        .then(res => res.json())
        .then(data => {console.log(data)
            namecharacter.textContent = data.name
            imgcharacter.setAttribute('src', data.url)
            speciecharacter.textContent = data.species
            genderCharacter.textContent = data.gender
        })
    }
})

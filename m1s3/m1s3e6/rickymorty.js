async function search () {
    let response = await fetch ('https://rickandmortyapi.com/api/character/10');
    let data = await response.json();
    console.log(data)
    document.getElementById("name").innerHTML = data.name
    document.getElementById("gender").innerHTML = data.gender
    document.getElementById("status").innerHTML = data.status
    document.getElementById("location").innerHTML = data.location.name
    document.getElementById("species").innerHTML = data.species
    document.getElementById("type").innerHTML = data.type
    document.getElementById("avatar").src = data.image // in this case must chance the innerHtml to src
}
search()
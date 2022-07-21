
window.addEventListener('DOMContentLoaded', () => {
    retrieveAlbums()
    document.getElementById('albums').addEventListener('click', retrieveAlbums)
})

function retrieveAlbums(){
    let ul = document.getElementById('Album-List')
    let band = document.getElementById('band')
    band.innerHTML = ""
    ul.innerHTML = ""
    fetch('http://localhost:3000/Albums')
    .then(res => res.json())
    .then(data => {
        data.forEach(Albums => {
            ul.innerHTML +=
                `<a href="#" data-id="${Albums.id}">${Albums.title} </a>`


        })
        makeLinksLive() // was orignally on line 19
    })
    
}

function makeLinksLive(){
    const Albums = document.querySelectorAll('a')
    Albums.forEach((Albums) => {
        Albums.addEventListener('click', showAlbum)
    })

}

const showAlbum = (event) => {
    // no default action on a click
    console.log(event.target.dataset.id)  //click event
    let band = document.getElementById('band')
    let ul = document.getElementById('Album-List')
    ul.innerHTML = ''
    fetch('http://localhost:3000' + `/Albums/${event.target.dataset.id}`) //this was a pain in the ass... returns promised obj
    .then(res => res.json())
    .then(Albums => {
        console.log(Albums)
        band.innerHTML = `<h1>${Albums.title}</h1><br/>
        <h2>Album-Cover</h2>
        <p>${Albums.url}</p>
        <h2>Year-Album-Release</h2>
        <h3>${Albums.year}</h3>
        <h2>Album-Background-Information</h2>
        <p>${Albums.description}</p>
        <h2>Band-Members</h2>
        <p>${Albums.members}</p>
        <h2>Songs</h2>
        <p>${Albums.songs.join(", ")}</p>`
    })
}



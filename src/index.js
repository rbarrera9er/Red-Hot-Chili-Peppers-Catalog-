
window.addEventListener('DOMContentLoaded', () => {
    retrieveAlbums()
})

function retrieveAlbums(){
    const mainUl = document.getElementById('Album-List')
    fetch('http://localhost:3000/Albums')
    .then(res => res.json())
    .then(data => {
        console.log('ryan')

    })
    console.log('barrera')
}

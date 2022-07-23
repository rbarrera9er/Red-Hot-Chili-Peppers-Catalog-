//const image_input = document.querySelectorAll("#image_input");
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
    .then(response => response.json())
    .then(data => {
        data.forEach(Albums => {
            ul.innerHTML +=
               `<div class="item1"><a href="#" data-id="${Albums.id}">${Albums.title} </a></div>`
        })
        activateLinks() // was orignally on line 19
    })    
}

function activateLinks(){
    const Albums = document.querySelectorAll('a')
   // const slideshow = document.getElementsByClassName("slideshow-container");
    //slideshow[0].style.display = "none";
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
    .then(response => response.json())
    .then(Albums => {
        console.log(Albums)
        band.innerHTML = 
        `<h1>${Albums.title}</h1><br/>
        <h2>Album-Cover</h2>
        <img src="${Albums.url}"/>
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

 

let i = 0;
let images = [];
let time = 4000;


    images[0] = 'https://upload.wikimedia.org/wikipedia/en/5/5e/Rhcp1.jpg';
    images[1] = 'https://upload.wikimedia.org/wikipedia/en/5/5b/Freakystyleyalbumcover.jpg';
    images[2] = 'https://upload.wikimedia.org/wikipedia/en/a/a2/UpliftMofoCover.jpg';
    images[3] = 'https://upload.wikimedia.org/wikipedia/en/9/98/Mother%27sMilkAlbumcover.jpg';
    images[4] = 'https://upload.wikimedia.org/wikipedia/en/5/5e/RHCP-BSSM.jpg';
    images[5] = 'https://upload.wikimedia.org/wikipedia/en/8/8a/Rhcp7.jpg';
    images[6] = 'https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg';
    images[7] = 'https://upload.wikimedia.org/wikipedia/en/2/23/Rhcp9.jpg';
    images[8] = 'https://upload.wikimedia.org/wikipedia/en/e/e6/Stadiumarcadium.jpg';

function changeImg(){
    document.slide.src = images[i];

        if(i < images.length - 1){
           i++;
        } else{
        i = 0
        }

 setTimeout("changeImg()", time);

}

window.onload = changeImg;




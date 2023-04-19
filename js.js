const d = document;
d.addEventListener('DOMContentLoaded',() => {
    cargarVideo();
});





/* GESTIÓN RESPONSIVE DEL VÍDEO */
const video = document.getElementById("video");
const imagen = document.getElementById("imagen");
const header = document.getElementById("headerId");


var bajaRes = "https://cdn.diariovasco.com/diariovasco/videos/look-horizontal.mp4";
var mediaRes = "https://cdn.diariovasco.com/diariovasco/videos/look-horizontal.mp4";
var altaRes = "https://cdn.diariovasco.com/diariovasco/videos/look-horizontal.mp4";



function cargarVideo(){    
    //Al cargar
    if(window.innerWidth <= 750){
        video.innerHTML="";
        imagen.remove();
        var source = document.createElement("source");
        source.src = bajaRes;
        source.type = "video/mp4";
        video.appendChild(source);
        video.muted = true;
        video.autoplay="autoplay";
        video.play();
    } else if(window.innerWidth > 750 && window.innerWidth <= 1200) {
        video.innerHTML="";
        imagen.remove();
        var source = document.createElement("source");
        source.src = mediaRes;
        source.type = "video/mp4";
        video.appendChild(source);
        video.muted = true;
        video.autoplay="autoplay";
    } else {
        video.innerHTML="";
        imagen.remove();
        var source = document.createElement("source");
        source.src = altaRes;
        source.type = "video/mp4";
        video.appendChild(source);
        video.muted = true;
        video.autoplay="autoplay";
    }
}
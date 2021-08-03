const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const playBtn = document.querySelector(".play-pause-button");
const returnBtn = document.querySelector(".return-btn");
const songDisplay = document.getElementById("song-display");

const songTitle = document.querySelector(".song-title");
const singerName = document.querySelector(".singer");
const albumPhoto = document.querySelector(".album-photo");

let currentSong = activeSong;
let prevSong;
let playedSong;
let play = false;
let songDisplayMode = false;
let chosenSong;

upBtn.addEventListener("click", ()=>{
    if(songDisplayMode)
        return;
    prevSong = currentSong;
    if(currentSong === 0){
        currentSong = songsList.length-1;
    } else {
        currentSong -= 1;
    }
    playlist.children[currentSong].classList.add("active");
    playlist.children[prevSong].classList.remove("active");
    
});
downBtn.addEventListener("click", ()=>{
    if(songDisplayMode)
        return;
    prevSong = currentSong;
    if(currentSong === songsList.length-1){
        currentSong = 0;
    } else {
        currentSong += 1;
    }
    playlist.children[currentSong].classList.add("active");
    playlist.children[prevSong].classList.remove("active");
});
prevBtn.addEventListener("click", ()=>{
    if(!songDisplayMode)
        return;
    prevSong = currentSong;
    if(currentSong === 0){
        currentSong = songsList.length-1;
    } else {
        currentSong -= 1;
    }
    playlist.children[currentSong].classList.add("active");
    playlist.children[prevSong].classList.remove("active");
    chosenSong = playSong();
    displaySongDetails(chosenSong);
    
});
nextBtn.addEventListener("click", ()=>{
    if(!songDisplayMode)
        return;
    prevSong = currentSong;
    if(currentSong === songsList.length-1){
        currentSong = 0;
    } else {
        currentSong += 1;
    }
    playlist.children[currentSong].classList.add("active");
    playlist.children[prevSong].classList.remove("active");
    chosenSong = playSong();
    displaySongDetails(chosenSong);
});


playBtn.addEventListener("click", () =>{
    chosenSong = playSong();
    if(!songDisplayMode){
        songDisplay.classList.toggle("hidden");
        playlist.classList.toggle("hidden");
        songDisplayMode = true;
        displaySongDetails(chosenSong);
    }
})

returnBtn.addEventListener("click",()=>{
    if(!songDisplayMode)
        return;
    songDisplay.classList.toggle("hidden");
    playlist.classList.toggle("hidden");
    songDisplayMode = false;
})

function playSong () {
    let chosenSong = songsList.filter(song => song.songName === playlist.children[currentSong].innerHTML);
    if(playedSong && (playedSong == chosenSong[0].song) && play){
        playedSong.pause();
        play = false;
        playPauseIcon.classList.remove('pause');
        return;
    }
    if(playedSong && play){
        playedSong.pause();
        playedSong.currentTime = 0;
    }
    playedSong = chosenSong[0].song;
    playedSong.play();
    playPauseIcon.classList.add('pause');
    play = true;
    return chosenSong[0];
}
function displaySongDetails(chosenSong){
    songTitle.innerHTML = chosenSong.songName;
    singerName.innerHTML = chosenSong.singer;
    albumPhoto.src = chosenSong.albumPhoto;
}
const playPauseButton = document.querySelector('.play-pause-button');
const playPauseIcon = document.querySelector('.box');
const playlist = document.getElementById('songs');


let activeSong;

const addSongsToPlaylist = () => {
    for(const song of songsList){
        let newSong = document.createElement('li');
        newSong.className = "song";
        newSong.innerHTML = song.songName; 
        playlist.appendChild(newSong);
    }
    playlist.children[0].classList.add("active");
    activeSong = 0;
}
addSongsToPlaylist();
playPauseButton.addEventListener('click', ()=>{
    // playPauseIcon.classList.toggle('pause');
    
});





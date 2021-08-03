const song1 = new Audio("./songs/It's Raining Men.mp3");
const song2 = new Audio("./songs/Elvis Presley - Can't Help Falling In Love (Audio).mp3");
const song3 = new Audio("./songs/Cant Take My Eyes off You.mp3");
const song4 = new Audio("./songs/Fly Me To The Moon.mp3");


const songsList = [];

function Song(songName,singer,song,albumPhoto){
    this.songName = songName;
    this.singer = singer;
    this.song = song;
    this.albumPhoto = albumPhoto;
}

songsList.push(new Song("It's Raining Men","The Weather Girls",song1,"./songs/singers/the-weather-girls.jpeg"));
songsList.push(new Song("Can't Help Falling In Love","Elvis Presley",song2,"./songs/singers/Elvis_Presley_1958.jpg"));
songsList.push(new Song("Cant Take My Eyes off You","The Four Seasons",song3,"./songs/singers/thefourseasons.jpg"));
songsList.push(new Song("Fly Me To The Moon","Frank Sinatra",song4,"./songs/singers/sinatra1.jpeg"));


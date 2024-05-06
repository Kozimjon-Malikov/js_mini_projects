// !Selectors 
const musicContainer=document.querySelector('#music-container'),
playBtn=document.querySelector('#play'),
nextBtn=document.querySelector('#next'),
prevBtn=document.querySelector('#prev'),
audio=document.querySelector('#audio'),
progress=document.querySelector('#progress'),
progressContainer=document.querySelector('#progress-container'),
title=document.querySelector('#title'),
cover=document.querySelector('#cover');

// !Music titles 
musics=['emirhan','herkes','sabry'];
let songIndex=2;

// !Load Song details 
loadSong(musics[songIndex])
function loadSong(musics){
    title.innerText=musics;
    audio.src=`music/${musics}.mp3`
    cover.src=`images/${musics}.jpg`
}

// !Update Song details 
playBtn.addEventListener('click',()=>{
    const isPlaying=musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play()

}
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause()
}

function prevSong(){
    songIndex--;
    if(songIndex<0){
        songIndex=musics.length-1;
    }
    loadSong(musics[songIndex])
    playSong()
}
function nextSong(){
    songIndex++;
    if(songIndex>musics.length-1){
        songIndex=0
    }
    loadSong(musics[songIndex])
    playSong()
}
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

// !Time song update 
audio.addEventListener('timeupdate',updateProgress)
function updateProgress(e){
    const {duration,currentTime}=e.srcElement;
    const progressPercent=(currentTime/duration)*100
    progress.style.width=`${progressPercent}%`
}
progressContainer.addEventListener('click',setProgress)
function setProgress(e){
    const width=this.clientWidth;
    const clickX=e.offsetX ;
    const duration=audio.duration;
    audio.currentTime=(clickX/width)*duration;
}
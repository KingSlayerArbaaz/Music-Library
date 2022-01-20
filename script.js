console.log("hi");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let songPlay = document.getElementById("songPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/5.mp3",
    coverPath: "cover/5.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/8.mp3",
    coverPath: "cover/8.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/9.mp3",
    coverPath: "cover/9.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/10.mp3",
    coverPath: "cover/10.mp3",
  },
  {
    songName: "SpiderMan No Way Home",
    filePath: "songs/11.mp3",
    coverPath: "cover/11.mp3",
  },

  ];
songItems.forEach((element, i)=>{ 
  element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// songItems.forEach((element,i) =>{
// console.log(element.i);
// element.getElementsByTagName('img')[0].src =songs.coverPath;
// })
songPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    songPlay.classList.remove("fa-play-circle");
    songPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } 
  else {
    audioElement.pause();
    songPlay.classList.remove("fa-pause-circle");
    songPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log("progress");
  progressBar.value=progress;
});
progressBar.addEventListener("change", () => {
    audioElement.currentTime=progressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{ 
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      // audioElement.src='songs/2.mp3';
      audioElement.src = `songs/${songIndex+1}.mp3`;
      // songPlayName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      songPlay.classList.remove('fa-play-circle');
      songPlay.classList.add('fa-pause-circle');
  })
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=11){
    songIndex =0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      songPlay.classList.remove('fa-play-circle');
      songPlay.classList.add('fa-pause-circle');
  
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex =0;
  }
  else{
    songIndex -=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      songPlay.classList.remove('fa-play-circle');
      songPlay.classList.add('fa-pause-circle');
  
})
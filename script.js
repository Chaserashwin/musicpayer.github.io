console.log("Welcome to spotify!!");

//Initialize the variables
let songIndex = 0;
let audioelement = new Audio('1.mp3');
let masterPlay = document.getElementById();
let myprogressbar = document.getElementById();
let songs=[
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Moko kahan dhudhe re bande",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioelement .paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else
    {
        audioelement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update seekbar
})
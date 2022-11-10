var video;

//initialize video element and turn off autoplay//
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector('#player1');
	video.loop = false;
	video.autoplay=false;
}
);

//play video and update volume information//
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("Update Volume Info");
	console.log('volume is: ' + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

//pause video on click//
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

var speed = 1;
//slow down video on click by 10% and log to console//
document.querySelector("#slower").addEventListener("click", function() {
	speed -= .1;
	video.playbackRate = speed;
	console.log('Playback rate is' + speed);
});

//speed up video on click by 10% and log to console//
document.querySelector("#faster").addEventListener("click", function() {
	speed += .1;
	video.playbackRate = speed;
	console.log('Playback rate is' + speed);
});

//skip ahead 10 sec in video on click and restart if skip exceeds video length//
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime != video.duration){
		video.currentTime += 10
	}	
	else{
		video.currentTime = 0
	}
	console.log("Current location of video: " + video.currentTime)
});

//mute and unmute video//
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true){
		video.muted = false
		mute.textContent = 'Mute';
	}
	else if (video.muted === false) {
		video.muted = true
		mute.textContent = 'Unmute';
	}
});

//volume slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("volume is:")
	video.volume = this.value/100
	console.log('volume is: ' + video.volume)
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

//add old school style filter to video//
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool');
});

//remove old school style filter from video//
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});
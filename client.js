var stream;
var video = document.querySelector('video'); 
var button = document.querySelector('button');
var canvas = document.querySelector('canvas');


function hasUserMedia() { 
   //check if the browser supports the WebRTC 
   return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || 
      navigator.mozGetUserMedia); 
} 
 
if (hasUserMedia()) {
   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia; 
		
   //enabling video and audio channels 
   navigator.getUserMedia({ video: true, audio: true }, function (s) { 
      stream = s; 

      //inserting our stream to the video tag     
      video.src = window.URL.createObjectURL(stream); 

   }, function (err) {}); 
	
} else { 
   alert("WebRTC is not supported"); 
}

button.onclick = function() {
	canvas.getContext("2d").drawImage(video, 0, 0, 320, 240);
	var img = canvas.toDataURL("png");
	
};

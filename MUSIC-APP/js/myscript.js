
list.onclick = function(x) {

  x.preventDefault();

  var tune = x.target;
  var audio = document.getElementById('audio');

  var source = document.getElementById('audioSource');
  source.src = tune.getAttribute('data-value');

  audio.load(); // Call this to just preload the audio without playing
  audio.play(); // Call this to play the song right away
};


// Function that will activate the 4 individual song titles, as each song is selected
function setTitle(songName){
  document.getElementById("title").innerHTML = songName;
}

$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
})
function toggleMute() {
   var myAudio = document.getElementById('audio-play');
   myAudio.muted = !myAudio.muted;
};
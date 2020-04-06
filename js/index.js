var date = new Date();
var text, hour;
var time = date.getHours();
var minutes = date.getMinutes();
var isLive = false
console.log(time);

// if (time >= 10 && time <= 16) {
  
// } else {
//   text = "Gracias por sintonizarnos, en el momento estamos fuera del aire";
//     hour = "Programación del 18 de abril al 2 de mayo de 10:00 am a 3:30 pm";
// }


var player = document.getElementById('player')
var btn = document.querySelector('.play-icon')

btn.addEventListener('click', function(e){
  e.preventDefault()
  if(this.classList.contains('active')) {
    player.pause()
    this.classList.remove('active')
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.34 140.14"><title>Play</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M4,4.25,118,70.07,4,135.89V4.25M3.67,0A3.66,3.66,0,0,0,0,3.67v132.8a3.67,3.67,0,0,0,3.67,3.67,3.53,3.53,0,0,0,1.82-.5l115-66.4a3.66,3.66,0,0,0,0-6.34L5.49.5A3.62,3.62,0,0,0,3.67,0Z"/></g></g></svg>'
    document.getElementById('bars').classList.remove('active')
    
  } else {
    player.play()
    this.classList.add('active')
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 140.11"><title>Pause</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M32.11,3.89V136.22H3.89V3.89H32.11M36,0H0V140.11H36V0Z"/><path d="M100.11,3.89V136.22H71.89V3.89h28.22M104,0H68V140.11h36V0Z"/></g></g></svg>'
    document.getElementById('bars').classList.add('active')
  }
})

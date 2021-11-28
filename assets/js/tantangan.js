// deadline
var countDownDate = new Date("Dec 6, 2021 15:37:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("deadline1").innerHTML = days + " hari " + hours + " jam "
  + minutes + " menit " + seconds + " detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("deadline1").innerHTML = "Tantangan telah berakhir";
  }
}, 1000);


var countDownDate2 = new Date("Dec 10, 2021 09:34:12").getTime();
var x2 = setInterval(function() {

  var now2 = new Date().getTime();

  var distance2 = countDownDate2 - now2;

  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

  document.getElementById("deadline2").innerHTML = days + " hari " + hours + " jam "
  + minutes + " menit " + seconds + " detik ";

  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("deadline2").innerHTML = "Tantangan telah berakhir";
  }
}, 1000);

var countDownDate3 = new Date("Dec 13, 2021 09:29:12").getTime();
var x3 = setInterval(function() {

  var now3 = new Date().getTime();

  var distance2 = countDownDate3 - now3;

  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

  document.getElementById("deadline3").innerHTML = days + " hari " + hours + " jam "
  + minutes + " menit " + seconds + " detik ";

  if (distance2 < 0) {
    clearInterval(x3);
    document.getElementById("deadline3").innerHTML = "Tantangan telah berakhir";
  }
}, 1000);

var countDownDate4 = new Date("Dec 20, 2021 10:27:00").getTime();
var x4 = setInterval(function() {

  var now4 = new Date().getTime();

  var distance2 = countDownDate4 - now4;

  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);

  document.getElementById("deadline4").innerHTML = days + " hari " + hours + " jam "
  + minutes + " menit " + seconds + " detik ";

  if (distance2 < 0) {
    clearInterval(x4);
    document.getElementById("deadline4").innerHTML = "Tantangan telah berakhir";
  }
}, 1000);



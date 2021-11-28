const password = document.getElementById("password");
const bgPwStrength = document.querySelector(".pw-strength");

password.addEventListener('keyup' ,() => {
  const content = document.getElementById("strength-content");

  if(password.value.length <= 0 || password.value.length <= 8) {
    content.innerHTML = 'password lemah';
    bgPwStrength.style.backgroundColor = '#ff3535';
    bgPwStrength.style.border = '1px solid black';
  }
  else if(password.value.length == 8 || password.value.length <= 14) {
    content.innerHTML = 'password kurang kuat';
    bgPwStrength.style.backgroundColor = '#f2ff35';
  }
  else {
    content.innerHTML = 'password sangat kuat';
    bgPwStrength.style.backgroundColor = '#0fe97c';
  }

});

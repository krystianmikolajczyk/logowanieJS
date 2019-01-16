function loginCheck(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (login == "test1" && password == "test1"){
      window.open ('dashboard.html');
    }
    else {
      alert ('Zły login lub hasło');
    }
  }
function passCheck(){
  var haslo = document.getElementById("haslo").value;
  var haslo2 = document.getElementById("haslo2").value;

  if (haslo != haslo2) {
  alert ('Hasła muszą być takie same');
  return false;
  }
  else {
    window.open ('dashboard.html');
  }
}
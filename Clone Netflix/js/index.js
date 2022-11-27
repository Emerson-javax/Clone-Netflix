function logar(){

  var login = document.getElementById('username').value;
  var senha = document.getElementById('password').value;

  if(login == "admin" && senha == "admin"){
      alert('Sucesso');
  }else{
      alert('Usuario ou senha incorretos');
  }

}
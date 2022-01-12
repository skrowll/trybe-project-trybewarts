// DOM Selection
const enterButton = document.querySelector('#enter-button');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButon = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

// Functions
function login(event) {
  event.preventDefault();
  if (
    emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456'
  ) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function enableButton() {
  if (agreement.checked === true) {
    submitButon.disabled = false;
  } else {
    submitButon.disabled = true;
  }
}

// Event Listener
enterButton.addEventListener('click', login);
agreement.addEventListener('click', enableButton);

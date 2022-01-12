window.onload = function () {
  //DOM Selection
  let enterButton = document.querySelector("#enter-button");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");
  let submitButon = document.querySelector("#submit-btn");
  let agreement = document.querySelector("#agreement");


  //Event Listener
  enterButton.addEventListener("click", login);
  agreement.addEventListener("click", enableButton);

  //Functions
  function login(event) {
    event.preventDefault();
    if (
      emailInput.value === "tryber@teste.com" &&
      passwordInput.value === "123456"
    ) {
      window.alert("Olá, Tryber!");
    } else {
      window.alert("Email ou senha inválidos.");
    }
  }

  function enableButton() {
    if (agreement.checked === true) {
      submitButon.disabled = false;
    } else {
      submitButon.disabled = true;
    }
  };
};




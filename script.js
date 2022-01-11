window.onload = function () {
  //DOM Selection
  let enterButton = document.querySelector("#enter-button");
  let emailInput = document.querySelector("#email");
  let passwordInput = document.querySelector("#password");

  //Event Listener
  enterButton.addEventListener("click", Login);

  //Functions
  function Login(event) {
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
};

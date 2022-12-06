let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("vui long nhap day du thong tin");
  } else {
    localStorage.setItem(username.value, json);
    alert("dang ky thanh cong");
    window.location.href = "/DN/index.html";
  }
});

const title = document.querySelector(".title h1");
const letter = "Welcome !";
var index = 0;
setInterval(() => {
  title.textContent += letter[index];
  index++;
  if (index == letter.length + 1) {
    index = 0;
    title.textContent = "";
  }
}, 500);

let registerForm = document.querySelector(".register-form");
let loginForm = document.querySelector(".login-form");
let haveAccount = document.querySelector(".haveAccount");
let noAccount = document.querySelector(".noAccount");
let regUsername = document.querySelector(".reg-username");
let regPassword = document.querySelector(".reg-password");
let loginUsername = document.querySelector(".login-username");
let loginPassword = document.querySelector(".login-password");

haveAccount.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginForm.style.display === "" || loginForm.style.display == "none") {
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
  }
});
noAccount.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    registerForm.style.display === "" ||
    registerForm.style.display == "none"
  ) {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  }
});
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let newUser = {
    id: users.length + 1,
    regUsernameVal: regUsername.value,
    regPasswordVal: regPassword.value,
  };
  let usernameExist = users.filter(
    (user) =>
      newUser.regUsernameVal === user.regUsernameVal &&
      newUser.regPasswordVal !== user.regPasswordVal
  );
  if (usernameExist.length >= 1) {
    alert("Username already exists");
    return;
  } else {
    let filteredReg = users.filter(
      (user) =>
        newUser.regUsernameVal === user.regUsernameVal &&
        newUser.regPasswordVal === user.regPasswordVal
    );
    if (filteredReg.length === 0) {
      users.push(newUser);
      alert("registered successfully");
    } else {
      alert("already logged in");
    }
    localStorage.setItem("users", JSON.stringify(users));
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];

  let newUser = {
    loginUsernameVal: loginUsername.value,
    loginPasswordVal: loginPassword.value,
  };
  let filteredUser = users.filter(
    (user) =>
      newUser.loginUsernameVal === user.regUsernameVal &&
      newUser.loginPasswordVal === user.regPasswordVal
  );
  console.log(filteredUser);
  if (filteredUser.length === 1) {
    alert(`Hello ${filteredUser[0].regUsernameVal}`);
  } else {
    alert("Invalid username or password");
  }
});

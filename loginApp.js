// Check login
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  var emailLoginLength = document.forms["login-form"]["email"].value.length;
  var passwordLoginLength = document.forms["login-form"]["password"].value.length;

  if(emailLoginLength < 5 || emailLoginLength > 50){
    alert("Email length must be from 5 to 50");
    return;
  }

  if(passwordLoginLength < 8 || emailLoginLength > 30){
    alert("Password must be from 8 to 30");
    return;
  }

  // Check login
  const xhr = new XMLHttpRequest();
  const url = "https://64230dc977e7062b3e29d565.mockapi.io/test";
  const data = {
    email: loginForm.email.value,
    password: loginForm.password.value,
  };

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const user_information = response.find(
        (user_information) =>
          user_information.email === data.email &&
          user_information.password === data.password
      );
      if (user_information) {
        localStorage.setItem("currentUserID",user_information.id);
        window.location.href = "./edit.html";
      } else {
        alert("Email or password is incorrect. Please enter again !!!");
      }
    }
  };

  xhr.send();
});

// Use to identify current user
var currentUserID;

// Remmember me
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

var rememberMe = document.getElementById("remember-me").checked;

// If the "remember me" checkbox is checked, store the login credentials in a cookie
if (rememberMe) {
  document.cookie = "username=" + username + ";";
  document.cookie = "password=" + password + ";";
}

// When the user visits the page again, check if the login credentials are stored in a cookie
var storedUsername = getCookie("username");
var storedPassword = getCookie("password");

if (storedUsername && storedPassword) {
  // Auto-fill the login form with the stored credentials
  document.getElementById("username").value = storedUsername;
  document.getElementById("password").value = storedPassword;
}

// Function to get the value of a cookie by name
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(
          cookie.substring(name.length + 1)
        );
        break;
      }
    }
  }
  return cookieValue;
}
const registerUser = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://64230dc977e7062b3e29d565.mockapi.io/test");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
          const user = JSON.parse(xhr.responseText);
          localStorage.setItem("currentUser", JSON.stringify(user));
          window.location.href = "./login.html";
        } else {
          console.log(xhr.responseText);
        }
      }
    };
    const data = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    xhr.send(JSON.stringify(data));
  };

  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    var passwordRegister = document.forms["register-form"]["password"].value;
    var repasswordRegister = document.forms["register-form"]["repassword"].value;

    var usernameRegisterLength = document.forms["register-form"]["username"].value.length;
    var emailRegisterLength = document.forms["register-form"]["email"].value.length;
    var passwordRegisterLength = passwordRegister.length;
    var repasswordRegisterLength = repasswordRegister.length;

    

    if(usernameRegisterLength < 3 || usernameRegisterLength > 30){
        alert("Username length must be from 3 to 30");
        return;
    }

    if(emailRegisterLength < 5){
        alert("Email must be from 5");
        return;
    }

    if(passwordRegisterLength < 8 || passwordRegisterLength > 30){
        alert("Password must be from 8 to 30");
        return;
    }

    if(repasswordRegisterLength < 8 || passwordRegisterLength > 30){
        alert("Repassword must be from 8 to 30");
        return;
    }

    if(repasswordRegister !== passwordRegister){
        alert("Repassword must be same as password");
        return;
    }

    registerUser();
  });
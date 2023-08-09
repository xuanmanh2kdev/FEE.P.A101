const currentUserID = localStorage.getItem("currentUserID");
const updateUser = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "PUT",
      "https://64230dc977e7062b3e29d565.mockapi.io/test/" + currentUserID
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const user = JSON.parse(xhr.responseText);
          console.log(user);
        } else {
          console.log(xhr.responseText);
        }
      }
    };
    const data = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      phone: document.getElementById("phone").value,
      description: document.getElementById("description").value,
    };
    xhr.send(JSON.stringify(data));
  };

  document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();

    var fNameEditLength = document.forms["edit-form"]["first-name"].value.length;
    var lNameEditLength = document.forms["edit-form"]["last-name"].value.length;
    var phoneEditLength = document.forms["edit-form"]["phone"].value.length;
    var descriptionEditLength = document.forms["edit-form"]["description"].value.length;

    if(fNameEditLength < 3 || fNameEditLength > 30){
        alert("First name length must be from 3 to 30");
        return;
    }

    if(lNameEditLength < 3 || lNameEditLength > 30){
        alert("Last name length must be from 3 to 30");
        return;
    }

    if(phoneEditLength < 9 || phoneEditLength > 13){
        alert("Phone length must be from 9 to 13");
        return;
    }

    if(descriptionEditLength > 200){
        alert("Description length must be under 200");
        return;
    }


    updateUser();
    alert("Edit profile success !!!");
  });
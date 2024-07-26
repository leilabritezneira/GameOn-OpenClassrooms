function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Form inputs 
const fistName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const ubication = document.querySelectorAll("checkbox-input[type=radio]");
const conditions = document.getElementById("checkbox1").checked;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Validate name and last name
function validateName(inputValue) {
  if (inputValue !== null && inputValue.length > 2) {
    return inputValue;
  } else {
    return false;
  }
}

// Validate email 
function validateEmail(inputValue) {
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
  if (inputValue !== null) {
    return regex.test(inputValue);
  } else {
    return false;
  }
}

// Validate quantity 
function validateQuantity(inputValue) {
  let regex = /^[0-9]+$/;
  if (inputValue !== null) {
    return regex.test(inputValue);
  } else {
    return false;
  }
}

// Validate location 
function validateLocation(inputValue) {
  for(let radio of inputValue){
    if(radio.checked === true) {
      return inputValue;
    } else {
      return false;
    }
  }
}


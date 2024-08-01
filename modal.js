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
const ubication = document.querySelectorAll("input[type=radio][name='location']");
const conditions = document.getElementById("conditions");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Validate name and last name
function validateName(inputValue) {
  if (inputValue !== null && inputValue.length > 2) {
    return true;
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

// Validate birthdate
function validateBirthdate(inputValue) {
  if (inputValue !== null) {
    return true;
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

function validateLocation() {
  const radios = document.querySelectorAll("input[name='location']");
  for (let radio of radios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
}

// Validate condition
function validateCondition(inputValue) {
  if (inputValue !== null) {
    return true;
  } else {
    return false;
  }
}


// Form validation
function validate(event) {
  event.preventDefault();

  let isValid = false;
		if (validateName(fistName.value) && validateName(lastName.value) && validateEmail(email.value) && 
        validateBirthdate(birthdate.value) && validateQuantity(quantity.value) && validateLocation() && validateCondition(conditions.value)) {
			isValid = true;
      console.log(isValid);
		} else {
			isValid = false;
      console.log(isValid);
		}

		if (isValid) {
      console.log(isValid);
			//event.submit();
		}
}
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
const confirmModal = document.querySelector(".confirm-modal");
const form = document.querySelector(".form");

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
  confirmModal.style.display = "none";
}

// Validate name and last name
function validateName(inputValue) {

    const parentElement = inputValue.closest('.formData');
  if (inputValue.value.trim().length >= 2) {
    parentElement.setAttribute('data-error-visible', 'false');
    return true;
  } else {

    if (inputValue.value.length >= 1 && inputValue.value.length <= 2 ) {
      parentElement.setAttribute('data-error-visible', 'true');
      parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du ' + inputValue.name);
    } else {
      parentElement.setAttribute('data-error-visible', 'true');
      parentElement.setAttribute('data-error', 'Ce champ est obligatoire ');
    }
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
		if (validateName(fistName) && validateName(lastName.value) && validateEmail(email.value) && 
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

      // Show confirm modal
      form.style.display = "none";
      confirmModal.style.display = "block";
		}
}
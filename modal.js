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
  const parentElement = inputValue.closest('.formData');
  let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

  if (regex.test(inputValue.value.trim())) {
    parentElement.setAttribute('data-error-visible', 'false');
    return true;
    
  } else {

    if (!regex.test(inputValue)){
      parentElement.setAttribute('data-error-visible', 'true');
      parentElement.setAttribute('data-error', 'Veuillez entrer un email valide');
    } 
    return false;
  }
}

// Validate birthdate
function validateBirthdate(inputElement) {
  const parentElement = inputElement.closest('.formData');
  const birthdate = new Date(inputElement.value);
  const today = new Date()
  const age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  if (inputElement.value == "" || inputElement.value == null){
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez entrer votre date de naissance');
    return false;

  } else if (age >= 18 && age <= 100) {
    parentElement.setAttribute('data-error-visible', 'false');
    return true;

  } else {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez avoir entre 18 et 100 ans');
    return false;
  }
}

// Validate quantity 
function validateQuantity(inputValue) {
  const parentElement = inputValue.closest('.formData');
  let regex = /^[0-9]+$/;

  if (inputValue.value == null || inputValue.value == "") {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez entrer la quantité');
    return false;

  } else {
    parentElement.setAttribute('data-error-visible', 'false');
    return regex.test(inputValue.value);
  }
}

// Validate Location
function validateLocation() {
  let parentElement = null;

  for (let radio of ubication) {
    if (!parentElement) {
      parentElement = radio.closest('.formData');
    }

    if (radio.checked) {
      parentElement.setAttribute('data-error-visible', 'false');
      return true;
    }
  }

  parentElement.setAttribute('data-error-visible', 'true');
  parentElement.setAttribute('data-error', 'Vous devez choisir une option');
  return false;
}

// Validate condition
function validateCondition() {
  const inputElement = document.getElementById("conditions");
  const parentElement = inputElement.closest('.formData');

  if (inputElement.checked) {
    parentElement.setAttribute('data-error-visible', 'false');
    return true;
  } else {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions');
    return false;
  }
}


// Form validation
function validate(event) {
  event.preventDefault();

  let isValid = false;
		if ( /*validateName(fistName) && validateName(lastName) && validateEmail(email) && 
        validateBirthdate(birthdate) && validateQuantity(quantity) &&*/  validateLocation() && validateCondition()) {
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
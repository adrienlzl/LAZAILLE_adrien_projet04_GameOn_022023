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
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.getElementById('submit');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();



    let Form = new Formulaire({
        firstname: document.getElementById('first').value,
        lastname: document.getElementById('last').value,
        email: document.getElementById('email').value,
        birthdate: document.getElementById('birthdate').value,
        quantity: document.getElementById('quantity').value,
        checkbox: document.getElementById('checkbox1').checked,


    });
    Form.validate();
});




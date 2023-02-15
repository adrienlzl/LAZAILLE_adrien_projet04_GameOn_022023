class Formulaire {
    constructor(data) {
        const {firstname, lastname, email, birthdate, quantity, city, checkbox} = data;
        this.firstname = data.firstname;
        this.city = "none"
        this.errors = 0;
    }

    validate() {


        if (this.validateFirstName() === 'error') {
            this.errors++
        }

        if (this.validateLastName() === 'error') {
            this.errors++
        }
        if (this.validateEmail() === 'error') {
            this.errors++
        }
        if (this.validateBirthDate() === 'error') {
            this.errors++
        }
        if (this.validateQuantity() === 'error') {
            this.errors++
        }
        if (this.validateCity() === 'error') {
            this.errors++
        }
        if (this.checkboxValidate() === 'error') {
            this.errors++
        }
        console.log("this error", this.errors)
        if (this.errors === 0) {
            const data = {
                newPlayer: {
                    firstName: this.firstname,
                    lastName: document.querySelector('#formulaire input[name="last"]').value,
                    email: document.querySelector('#formulaire input[name="email"]').value,
                    birthday: document.querySelector('#formulaire input[name="birthdate"]').value,
                    tournamentNumber: document.querySelector('#formulaire input[name="quantity"]').value,
                    city: this.city,
                }
            }
            console.log(data);
            console.log(data.newPlayer)
            document.querySelector('.bground').style.display = 'none';
            this.endModal();
        } else {

            console.log('loupé');
        }

    }


    validateFirstName() {
        const dataFirst = document.getElementById('FormDataFirst');
        const regName = /^[a-zA-Z]+[a-zA-Z]+$/;


        if (this.firstname === "") {
            dataFirst.dataset.error = 'Veuillez entrer votre nom';
            dataFirst.dataset.errorVisible = 'true'
            return 'error'
        }
        if (!regName.test(document.getElementById('first').value)) {
            dataFirst.dataset.error = 'Votre nom doit contenir 3 lettres et aucun chiffre';
            dataFirst.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataFirst.removeAttribute('data-error');
            dataFirst.removeAttribute('data-error-visible');
        }
    }


    validateLastName() {
        const dataLast = document.getElementById('FormDataLast');
        const regName = /^[a-zA-Z]+[a-zA-Z]+$/;
        if (document.getElementById('last').value === "") {
            dataLast.dataset.error = 'Veuillez entrer votre prénom';
            dataLast.dataset.errorVisible = 'true'
            return 'error'
        }
        if (!regName.test(document.getElementById('last').value)) {
            dataLast.dataset.error = 'Votre prénom doit contenir 3 lettres et aucun chiffre';
            dataLast.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataLast.removeAttribute('data-error');
            dataLast.removeAttribute('data-error-visible')
        }
    }


    validateEmail() {
        const dataEmail = document.getElementById('FormEmail');
        const regEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (document.getElementById('email').value === "") {
            dataEmail.dataset.error = 'Veuillez entrer votre email';
            dataEmail.dataset.errorVisible = 'true'
            return 'error'
        }
        if (!regEmail.test(document.getElementById('email').value)) {
            dataEmail.dataset.error = 'Merci de rentrer un email valide, il doit contenir un @';
            dataEmail.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataEmail.removeAttribute('data-error');
            dataEmail.removeAttribute('data-error-visible')
        }
    }


    validateBirthDate() {

        const dataBirthDate = document.getElementById('FormBirthdate');
        const playerDate = document.getElementById('birthdate').value;
        const dateOfBirthday = new Date(playerDate);
        const minimalAge = 18;
        const todayDate = new Date();
        const age = todayDate.getFullYear() - dateOfBirthday.getFullYear();

        if (isNaN(dateOfBirthday.getTime())) {
            dataBirthDate.dataset.error = 'Veuillez renseigner votre date de naissance';
            dataBirthDate.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataBirthDate.removeAttribute('data-error');
            dataBirthDate.removeAttribute('data-error-visible')
        }
        if (age < minimalAge) {
            dataBirthDate.dataset.error = 'Vous devez être majeur pour participer';
            dataBirthDate.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataBirthDate.removeAttribute('data-error');
            dataBirthDate.removeAttribute('data-error-visible')
        }
    }


    validateQuantity() {
        const dataQuantity = document.getElementById('FormQuantity');
        const numberQuantity = parseInt(document.getElementById('quantity').value, 10);
        if (document.getElementById('quantity').value === "") {
            dataQuantity.dataset.error = 'Veuillez renseigner une valeur';
            dataQuantity.dataset.errorVisible = 'true'
            return 'error'
        }
        if (numberQuantity < 0) {
            dataQuantity.dataset.error = 'Les chiffres négatifs ne sont pas autorisés';
            dataQuantity.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataQuantity.removeAttribute('data-error');
            dataQuantity.removeAttribute('data-error-visible')
        }
    }


    validateCity() {
        const dataLocation = document.getElementById('FormDataLocation');
        const locationRadios = document.getElementsByName('location');
        for (let i = 0; i < locationRadios.length; i++) {
            if (locationRadios[i].checked) {
                this.city = locationRadios[i].value;

            }
        }
        if (this.city === "none")
         {
             console.log(dataLocation);
            dataLocation.dataset.error = 'Veuillez sélectionner une ville';
             dataLocation.dataset.errorVisible = 'true'
            return 'error'
        } else {
            dataLocation.removeAttribute('data-error');
            dataLocation.removeAttribute('data-error-visible');
        }
    }


    checkboxValidate() {
        if (document.getElementById('checkbox1').checked === false) {
            document.getElementById('formCheckbox1').dataset.error = `Veillez accepter les conditions d'utilisation`;
            return 'error'
        } else {
            document.getElementById('formCheckbox1').removeAttribute('data-error')
        }
    }



    endModal() {
        const main = document.getElementById('main');
        const backGroundEnd = document.createElement('div');
        backGroundEnd.id = 'backGroundEnd';
        backGroundEnd.classList.add('backGroundEnd');
        backGroundEnd.style.display = 'block';
        backGroundEnd.style.position = 'absolute';
        backGroundEnd.style.zIndex = "10";
        backGroundEnd.style.left = "0";
        backGroundEnd.style.top = "0";
        backGroundEnd.style.height = "100%";
        backGroundEnd.style.width ="100%";
        backGroundEnd.style.overflow ="auto";
        main.append(backGroundEnd);
        const contentEnd = document.createElement('div');
        contentEnd.classList.add('content')
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        backGroundEnd.appendChild(contentEnd)
        contentEnd.appendChild(spanClose);
        const modalBodyEnd = document.createElement('div');
        modalBodyEnd.classList.add('modal-body');
        contentEnd.appendChild(modalBodyEnd);
        const endText = document.createElement('h3');
        endText.innerText = 'Merci pour votre inscription.';
        endText.style.margin = '250px auto';
        endText.style.width = '290px';
        endText.style.fontSize = '36px';
        modalBodyEnd.appendChild(endText);
        const closeInput = document.createElement('input');
        closeInput.classList.add('btn-submit');
        closeInput.value = 'Fermer';
        closeInput.style.width = '220px';
        modalBodyEnd.appendChild(closeInput);


        spanClose.addEventListener("click", (e) => {
            backGroundEnd.style.display = "none"
        })

        closeInput.addEventListener("click", (e) => {
            backGroundEnd.style.display = "none"
        })


    }


}

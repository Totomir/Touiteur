const touitForm = document.forms[0];
const submitButton = document.querySelector('#submitButton');
const touitSection = document.querySelector('#touitSection');

touitForm.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const touit = document.createElement("div");
    touit.classList.add("even");

    const touitText = document.createElement("p");
    touitText.classList.add("touitText");
    touitText.textContent = touitForm["inputTouit"].value;

    const touitosLogo = document.createElement("picture");
    touitosLogo.classList.add("touitosLogo");

    const touitosImg = document.createElement("img");
    touitosImg.src = "images/alien.png";
    touitosImg.alt = "Profil photo of AstroTouitos";

    touitosLogo.appendChild(touitosImg);
    touit.appendChild(touitosLogo);
    touit.appendChild(touitText);
    touitSection.appendChild(touit);

    touitForm.reset();
});


// <div class="even">
//     <p class="touitText">Petit Touit de l'espace</p>
//     <picture class="touitosLogo">
//         <img src="images/dog.png" alt="Profil photo of AstroTouitos">
//     </picture>
// </div>
const touitForm = document.forms[0];
const submitButton = document.querySelector('#submitButton');
const touitSection = document.querySelector('#touitSection');

touitForm.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const touit = document.createElement("div");
    touit.classList.add("even");

    const touitText = document.createElement("p");
    touitText.textContent = touitForm["inputTouit"].value;

    const touitosLogo = document.createElement("picture");
    touitosLogo.classList.add("touitosLogo");

    const touitosImg = document.createElement("img");
    touitosImg.src = "images/alien.png";
    touitosImg.alt = "Profil photo of AstroTouitos";

    touitosLogo.appendChild(touitosImg);
    touit.appendChild(touitosLogo);
    touit.appendChild(touitText);

    touitForm.reset();
});


// <div class="even">
//     <div class="touitText"><p>Petit Touit de l'espace</p></div>
//     <picture class="touitosLogo">
//         <img src="images/dog.png" alt="Profil photo of AstroTouitos">
//     </picture>
// </div>
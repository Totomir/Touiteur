// Déclaration des variables qui serviront pour nourrir le DOM
const touitForm = document.querySelector("#touitForm");
const touitSection = document.querySelector("#touitSection");
const profil = document.querySelector("#pseudo");
const trendingZone = document.querySelector("#trending-zone");

// Mise en place de la fonction addTouit qui permet de recevoir les Touits

function addTouit(name, message) {
  const touit = document.createElement("div");
  touit.classList.add("odd");

  const touitText = document.createElement("p");
  touitText.classList.add("touitText");
  touitText.textContent = message;

  const touitAuthor = document.createElement("div");
  touitAuthor.classList.add("authorProfile");

  const touitosLogo = document.createElement("picture");
  touitosLogo.classList.add("touitosLogo");

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = name;

  const touitosImg = document.createElement("img");
  touitosImg.src = "images/alien.png";
  touitosImg.alt = "Profil photo of AstroTouitos";

  touitAuthor.appendChild(author);
  touitAuthor.appendChild(touitosLogo);
  touitosLogo.appendChild(touitosImg);
  touit.appendChild(touitText);
  touit.appendChild(touitAuthor);
  touitSection.appendChild(touit);
  touitSection.prepend(touit);
}

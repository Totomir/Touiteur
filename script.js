// Déclaration des variables qui serviront pour nourrir le DOM
const touitForm = document.querySelector("#touitForm");
const touitSection = document.querySelector("#touitSection");
const profil = document.querySelector("#pseudo");

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

// Mise en place de la récupération des Touits

// Mise en place d'une fonction refresh avec un timeOut permettant de réguler le nombre de requêtes
// Avec la variable lastTimeStamp on peut réguler le nombre de touit afficher

let lastTimeStamp = 1644420000000;

function refreshTouits() {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://touiteur.cefim-formation.org/list?ts=" +
      encodeURIComponent(lastTimeStamp),
    true
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        lastTimeStamp = response.ts;
        const object = response.messages;

        object.forEach((touit) => {
          addTouit(touit.name, touit.message);
        });
      } else {
        alert(
          "Erreur : la liste des touits n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
        );
      }
      setTimeout(refreshTouits, 3000);
    }
  });

  request.send();
}

refreshTouits();

// Mise en place permettant d'écrire des touits

touitForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const request2 = new XMLHttpRequest();
  request2.open("POST", "http://touiteur.cefim-formation.org/send", true);
  request2.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  request2.addEventListener("readystatechange", function () {
    if (request2.readyState === XMLHttpRequest.DONE) {
      // Mise en place de condition en fonction du status serveur
      if (request2.status === 200) {
        touitForm.message.value = "";
        alert("Touit envoyé !");
      } else if (request2.status === 400) {
        const response = JSON.parse(request2.responseText);
        alert("Erreur : " + response.error);
      } else {
        alert(
          "Erreur : une erreur inconnue est survenue. Veuillez contacter le webmaster !"
        );
      }
    }
  });

  request2.send(
    "name=" +
      encodeURIComponent(touitForm.username.value) +
      "&message=" +
      encodeURIComponent(touitForm.message.value)
  );
});

// const trend = new XMLHttpRequest();
// trend.open("GET", "http://touiteur.cefim-formation.org/trending", true);
// trend.addEventListener("readystatechange", function () {
//   if (trend.readyState === XMLHttpRequest.DONE) {
//     const response = JSON.parse(trend.responseText);
//     const table = new Array(0);
//     table = response.items[response["key"]] = response;
//     console.log(table);
//   }
// });

// trend.send();

// Transformer l'objet litéral en array

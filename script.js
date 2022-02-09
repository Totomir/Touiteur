// Déclaration des variables qui serviront pour nourrir le DOM
const touitForm = document.forms[0];
const submitButton = document.querySelector("#submitButton");
const touitSection = document.querySelector("#touitSection");
const profil = document.querySelector("#pseudo");

// Mise en place de la fonction addTouit qui permet de recevoir les Touits

function addTouit(msg, auth) {
  const touit = document.createElement("div");
  touit.classList.add("odd");

  const touitText = document.createElement("p");
  touitText.classList.add("touitText");
  touitText.textContent = msg;

  const touitAuthor = document.createElement("div");
  touitAuthor.classList.add("authorProfile");

  const touitosLogo = document.createElement("picture");
  touitosLogo.classList.add("touitosLogo");

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = auth;

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

const timeSet = setInterval(function () {
  const request = new XMLHttpRequest();
  request.open("GET", "http://touiteur.cefim-formation.org/list", true);
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(request.responseText);
      const object = response.messages;

      for (let i = object.length - 10; i < object.length; i++) {
        let msg = object[i].message;
        let auth = object[i].name;
        addTouit(msg, auth);
      }
    }
  });
  request.send();
}, 1000);

submitButton.addEventListener("click", function () {
  let name;

  touit = touitForm["inputTouit"].value;
  pseudo = profil.value;

  const request2 = new XMLHttpRequest();
  const params = "message=" + touit + "&name=" + pseudo;
  request2.open("POST", "http://touiteur.cefim-formation.org/send", true);
  request2.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  request2.addEventListener("readystatechange", function () {
    if (request2.readyState === XMLHttpRequest.DONE) {
      return;
    }
    if (request2.status == 200) {
      return;
    }
  });
  request2.send(params);

  touitForm.reset();
});

const trend = new XMLHttpRequest();
trend.open("GET", "http://touiteur.cefim-formation.org/trending", true);
trend.addEventListener("readystatechange", function () {
  if (trend.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(trend.responseText);
    console.log(response);
  }
});

trend.send();

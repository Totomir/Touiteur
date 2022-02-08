const touitForm = document.forms[0];
const submitButton = document.querySelector("#submitButton");
const touitSection = document.querySelector("#touitSection");
const profil = document.querySelector("#pseudo");

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
  touitSection.insertBefore(touit, touitSection.firstChild);
  touitForm.reset();
}

// const request = new XMLHttpRequest();
// request.open("GET", "http://touiteur.cefim-formation.org/list", true);
// request.addEventListener("readystatechange", function () {
//   if (request.readyState === XMLHttpRequest.DONE) {
//     const response = JSON.parse(request.responseText);
//     console.log(response);
//     const object = response.messages;

//     for (let i = object.length - 100; i < object.length; i++) {
//       console.log(object[i].message);
//       let msg = object[i].message;
//       let auth = object[i].name;
//       addTouit(msg, auth);
//     }
//   }
// });
// request.send();

submitButton.addEventListener("click", function () {
  let name;

  message = touitForm["inputTouit"].value;
  name = profil.value;

  const request2 = new XMLHttpRequest();
  request2.open("POST", "http://touiteur.cefim-formation.org/send", true);
  request2.addEventListener("readystatechange", function () {
    if (request2.readyState === XMLHttpRequest.DONE) {
      const response = JSON.parse(request2.responseText);
      console.log(response);
    }
  });
  request2.send();

  touitForm.reset();
});

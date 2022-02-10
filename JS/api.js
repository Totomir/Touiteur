// Création de fonctions souples que l'on peut utiliser avec plus ou moins de paramètres

// Fonction permettant la récupération de la list des touits
function apiListTouits(
  timestamp = 1644420000000,
  onSuccess = () => {},
  onError = () => {}
) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://touiteur.cefim-formation.org/list?ts=" +
      encodeURIComponent(timestamp),
    true
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        // Executer le code en cas de success
        onSuccess(response); // Callback fonction permettant de récupérer des éléments extérieurs et les implémenter dans notre fonction actuel en faisant passer du code par les paramètres d'une fonction
      } else {
        // Executer le code en cas d'erreur
        onError();
      }
    }
  });

  request.send();
}

// Fonction permettant d'envoyer un touit
function apiSendTouit(name, message, onSuccess = () => {}, onError = () => {}) {
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
        onSuccess();
      } else {
        onError(request2);
      }
    }
  });

  request2.send(
    "name=" +
      encodeURIComponent(touitForm.username.value) +
      "&message=" +
      encodeURIComponent(touitForm.message.value)
  );
}

// Fonction permettant de faire apparaitre les termes tendances
function apiGetTrending(onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open("GET", "http://touiteur.cefim-formation.org/trending", true);
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else {
        onError();
      }
    }
  });
  request.send();
}

// Fonction permettant de liker les touits
function apiAddLike(id, onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open("PUT", "http://touiteur.cefim-formation.org/likes/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else {
        onError(request);
      }
    }
  });
  request.send("message_id=" + encodeURIComponent(id));
}

// Fonction permettant de disliker les touits
function apiRemoveLike(id, onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open(
    "DELETE",
    "http://touiteur.cefim-formation.org/likes/remove",
    true
  );
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else {
        onError(request);
      }
    }
  });
  request.send("message_id=" + encodeURIComponent(id));
}

// Fonction permettant de rafraichir
function apiGetTouit(id, onSuccess = () => {}, onError = () => {}) {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "http://touiteur.cefim-formation.org/get?id=" + encodeURIComponent(id),
    true
  );
  request.addEventListener("readystatechange", function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
      } else {
        onError();
      }
    }
  });
  request.send();
}

// Mise en place de la récupération des Touits

// Mise en place d'une fonction refresh avec un timeOut permettant de réguler le nombre de requêtes
// Avec la variable lastTimeStamp on peut réguler le nombre de touit afficher

let lastTimeStamp = 1644420000000;

function refreshTouits() {
  apiListTouits(
    lastTimeStamp,
    (resp) => {
      lastTimeStamp = resp.ts;
      const object = resp.messages;
      object.forEach((touit) => {
        addTouit(touit.name, touit.message);
      });
      setTimeout(refreshTouits, 1000);
    },
    () => {
      alert(
        "Erreur : la liste des touits n'a pu être récupérée ! Veuillez rééssayer plus tard ou contacter le service information."
      );
    }
  );
}

refreshTouits();

// Mise en place permettant d'écrire des touits

touitForm.addEventListener("submit", function (ev) {
  ev.preventDefault();

  apiSendTouit(
    touitForm.username.value,
    touitForm.message.value,
    () => {
      touitForm.message.value = "";
      alert("Touit envoyé !");
    },
    (req) => {
      if (request2.status === 400) {
        const response = JSON.parse(request2.responseText);
        alert("Erreur : " + response.error);
      } else {
        alert(
          "Erreur : une erreur inconnue est survenue. Veuillez contacter le webmaster !"
        );
      }
    }
  );
});

apiGetTrending((words) => {
  trendingZone.innerHTML = "";
  Object.entries(words)
    .sort(([w1, c1], [w2, c2]) => c2 - c1)
    .slice(0, 10)
    .forEach(([word, count]) => {
      const trendElement = document.createElement("span");
      trendElement.textContent = word;

      trendingZone.append(trendElement);
    });
});

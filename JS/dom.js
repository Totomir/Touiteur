// Déclaration des variables qui serviront pour nourrir le DOM
const touitForm = document.querySelector("#touitForm");
const touitSection = document.querySelector("#touitSection");
const profil = document.querySelector("#pseudo");
const trendingZone = document.querySelector("#trendingZone");

// Mise en place de la fonction addTouit qui permet la création du DOM

function addTouit({ name, message, likes, id }) {
  // Fonction 'update' qui permet l'actualisation à l'aide des ID récupérer par l'api GetTouit
  function update() {
    apiGetTouit(
      id,
      (resp) => {
        nbLike.textContent = resp.data.likes;
      },
      (req) => {
        alert(
          "Erreur (" +
            req.statusText +
            ") : une erreur inconnue est survenue. Veuillez contacter le webmaster !"
        );
      }
    );
  }

  // Création de la div "odd" qui permet la mise en forme de chaque, son nom vient de Impaire car initialement lorsque je devais envoyer des touits, les miens devait se construire à droite en numéro 2 donc Even, et les touits reçu devait être à gauche
  const touit = document.createElement("div");
  touit.classList.add("odd");
  touit.addEventListener("mouseenter", update);

  // Construction de la div contenant le message du touit
  const touitText = document.createElement("div");
  touitText.classList.add("touitText");
  touitText.textContent = message;

  // Construction de la div qui va gérer le style des éléments sous le message (auteur, like )
  const touitAuthor = document.createElement("div");
  touitAuthor.classList.add("authorProfile");

  // Construction de la zone qui comportera la photo de profil de l'auteur
  const touitosLogo = document.createElement("picture");
  touitosLogo.classList.add("touitosLogo");

  // Construction de la div comprenant le nom de l'auteur
  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = name;

  // Construction de la photo de profil
  const touitosImg = document.createElement("img");
  touitosImg.src =
    "http://touiteur.cefim-formation.org/avatar/get?username=" +
    encodeURIComponent(name) +
    "&size=80";
  touitosImg.alt = "Profil photo of " + name;

  // Construction de la div qui comportera les boutons likes et dislikes
  const touitButton = document.createElement("div");
  touitButton.classList.add("likeDislike");

  // Construction du bouton like avec ajout de sa fonctionnalité
  const likeButton = document.createElement("button");
  likeButton.addEventListener("click", function () {
    apiAddLike(id, update, (req) => {
      alert(
        "Erreur (" +
          req.statusText +
          ") : une erreur inconnue est survenue. Veuillez contacter le webmaster !"
      );
    });
  });

  // Ajout d'une image au bouton
  const likeImg = document.createElement("img");
  likeImg.src = "images/like.png";
  likeImg.alt = "Like";

  // Ajout entre les boutons du nombres de likes totals
  const nbLike = document.createElement("span");
  nbLike.textContent = likes;

  // Construction du bouton dislike avec ajout de sa fonctionnalité
  const dislikeButton = document.createElement("button");
  dislikeButton.addEventListener("click", function () {
    apiRemoveLike(id, update, (req) => {
      alert(
        "Erreur (" +
          req.statusText +
          ") : une erreur inconnue est survenue. Veuillez contacter le webmaster !"
      );
    });
  });

  // Ajout d'une image au bouton
  const dislikeImg = document.createElement("img");
  dislikeImg.src = "images/dislike.png";
  dislikeImg.alt = "Dislike";

  // Imbrication de chaque élément pour avoir la mise en page
  likeButton.append(likeImg);
  dislikeButton.append(dislikeImg);
  touitButton.append(likeButton, nbLike, dislikeButton);
  touitosLogo.append(touitosImg);
  touitAuthor.append(author, touitosLogo, touitButton);
  touit.append(touitText, touitAuthor);
  touitSection.prepend(touit);
}

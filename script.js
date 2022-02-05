function addTouit() {
    const touitForm = document.forms[0];
    const submitButton = document.querySelector('#submitButton');
    const touitSection = document.querySelector('#touitSection');
    const profil = document.querySelector('#pseudo');
    
    
    
    submitButton.addEventListener('click', function(ev) {
        ev.preventDefault();
    
        const touit = document.createElement("div");
        touit.classList.add("even");
    
        const touitText = document.createElement("p");
        touitText.classList.add("touitText");
        touitText.textContent = touitForm["inputTouit"].value;
    
        const touitAuthor = document.createElement("div");
        touitAuthor.classList.add("authorProfile");
    
        const touitosLogo = document.createElement("picture");
        touitosLogo.classList.add("touitosLogo");
    
        const author = document.createElement("div");
        author.classList.add("author")
        author.textContent = profil.value;
    
        const touitosImg = document.createElement("img");
        touitosImg.src = "images/dog.png";
        touitosImg.alt = "Profil photo of AstroTouitos";
    
        touitAuthor.appendChild(author)
        touitAuthor.appendChild(touitosLogo)
        touitosLogo.appendChild(touitosImg);
        touit.appendChild(touitText);
        touit.appendChild(touitAuthor);
        touitSection.appendChild(touit);
        touitSection.insertBefore(touit, touitSection.firstChild)
        touitForm.reset();
    });
    
}

addTouit();
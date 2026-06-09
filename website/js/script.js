// Message de bienvenue
window.onload = function() {
    console.log("Site DevOps chargé !");

    // Menu actif
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = "#f39c12";
        }
    });
}

// Fonction pour le formulaire de contact
function envoyerMessage() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom && email && message) {
        alert("Merci " + nom + " ! Votre message a été envoyé.");
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}

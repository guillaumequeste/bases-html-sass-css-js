// Comparaison des 2 mots de passe
mdp = document.getElementById("mdp");
mdp_verif = document.getElementById("mdp_verif");
msgMdp = document.getElementById("msgMdp");
msgMdp_verif = document.getElementById("msgMdp_verif");

// Affichage et suppression d'un message lors de la saisie du pseudo
var pseudoElt = document.getElementById("pseudo");
pseudoElt.addEventListener("focus", function() {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
pseudoElt.addEventListener("blur", function(e) {
    document.getElementById("aidePseudo").textContent = " ";
});

// Vérification du nombre de caractères
mdp.addEventListener("keyup", function(e) {
    if ((mdp.value.length < 4 && mdp.value.length > 0) || mdp.value.length > 8) {
        msgMdp.innerHTML = "Nombre de caractères incorrect";
        mdp.style.borderColor = "red";
    } else {
        msgMdp.innerHTML = "";
        mdp.style.borderColor = "green";
    }
});

mdp_verif.addEventListener("keyup", function(e) {
    if (mdp.value !== mdp_verif.value) {
        msgMdp_verif.innerHTML = "Les mots de passe <strong>ne</strong> sont <strong>pas</strong> identiques";
        mdp_verif.style.borderColor = "red";
    } else {
        msgMdp_verif.innerHTML = "Les mots de passe sont identiques";
        mdp_verif.style.borderColor = "green";
    }
});

// Affichage de la saisie dans la console
form.addEventListener("submit", function(e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var mail = form.elements.mail.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et l'adresse mail " + mail);

    // Affichage confirmation par mail checkbox
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d’inscription par mail");
    } else {
        console.log("Vous n’avez pas demandé de confirmation d’inscription par mail");
    }

    // Affichage abonnement boutons radio
    switch (form.elements.abonnement.value) {
        case "abotout":
            console.log("Vous êtes abonné à tout");
            break;
        case "abonews":
            console.log("Vous êtes abonné à la newsletter");
            break;
        case "rien":
            console.log("Vous n'êtes abonné à rien");
            break;
        default:
            console.log("Erreur : code d'abonnement non reconnu");
    }

    // Affichage nationalité liste déroulante
    switch (form.elements.nationalite.value) {
        case "fr":
            console.log("Vous êtes français(e)");
            break;
        case "es":
            console.log("Vous êtes espagnol");
            break;
        case "it":
            console.log("Vous êtes italien");
            break;
        default:
            console.log("Erreur : code de nationalité non reconnu ");
    }
    e.preventDefault();
});


// Affichage de la saisie dans la page
var btnSubmit = function(e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var mail = form.elements.mail.value;
    var description = "Vous avez choisi le pseudo " + pseudo + ", votre mot de passe est " + mdp + " et votre adresse mail : " + mail + ".";
    $("#resume").html(description);

    // Affichage confirmation par mail checkbox
    if (form.elements.confirmation.checked) {
        var confmail = "Vous avez demandé une confirmation d’inscription par mail.";
        $("#confirmationMail").html(confmail);
    } else {
        var noconfmail = "Vous n’avez pas demandé de confirmation d’inscription par mail.";
        $("#confirmationMail").html(noconfmail);
    }


    /* Champ obligatoire
    function verifierMail() {
        var champ = $("#mail");
        if (champ.value === "") {
            return true;
        } else {
            return false;
        }
    }
    var resultat = verifierMail();
    if (resultat === true) {
        alert("Une adresse mail est obligatoire");
    } */


    // Affichage abonnement boutons radio
    switch (form.elements.abonnement.value) {
        case "abotout":
            var abotout = "Vous êtes abonné à tout.";
            $("#abonnement").html(abotout);
            break;
        case "abonews":
            var abonews = "Vous êtes abonné à la newsletter.";
            $("#abonnement").html(abonews);
            break;
        case "rien":
            var rien = "Vous n'êtes abonné à rien.";
            $("#abonnement").html(rien);
            break;
        default:
            var erreurAbonnement = "Erreur : code d'abonnement non reconnu.";
            $("#abonnement").html(erreurAbonnement);
    }

    // Affichage nationalité liste déroulante
    switch (form.elements.nationalite.value) {
        case "fr":
            var francais = "Vous êtes français(e).";
            $("#nation").html(francais);
            break;
        case "es":
            var espagnol = "Vous êtes espagnol(e).";
            $("#nation").html(espagnol);
            break;
        case "it":
            var italien = "Vous êtes italien(ne).";
            $("#nation").html(italien);
            break;
        default:
            var erreurNation = "Erreur : code de nationalité non reconnu.";
            $("#nation").html(erreurNation);
    }
}


// Changer texte avec bouton avec jQuery sans Ajax
$("#changer").on("click", function() {
    $("#changement").html("j'ai changé le texte sans ajax");
})


// Changer le texte avec Ajax
$("#button1").on("click", function(e) {
    $.ajax({
        url: "fichier1.html",
        complete: function(content) {
            $("#fichier1").html(content.responseText);
        }
    })
});


// Vérification du nombre saisi
var b = document.getElementById("test");
b = addEventListener("click", testValeur);

function testValeur() {
    var p = document.getElementById("msg");
    var x = document.getElementById("nb").value;
    try {
        if ((isNaN(x)) || (x == "")) {
            throw "Vous n'avez pas rentré de nombre valide";
        } else if ((x < 1) || (x > 10)) {
            throw "Valeur trop grande ou trop petite";
        } else {
            msg.innerHTML = "Nombre OK";
        }
    } catch (e) {
        msg.innerHTML = e;
    } finally {
        document.getElementById("nb").value = "";
    }
}


// Formuulaire chat
$(function() {

    var choixChat = $('#choice');
    var raisonAdoption = $('#reason');
    var errors = false;

    // Soumission du formulaire
    $('#requestCat').on('submit', function(e) {
        e.preventDefault(); // On empêche l'envoi du formulaire

        // On vérifie la longueur de la valeur sélectionnée dans le select
        // Les classes .has-error et .has-success proviennent de bootstrap et doivent être appliquées sur la classe parente .form-group
        if (choixChat.val().length == 0) {
            choixChat.parent().addClass('has-error');
            errors = true;
        } else {
            choixChat.parent().addClass('has-success');
        }

        // On vérifie la longueur du textearea (minimum 15 caractères)
        if (raisonAdoption.val().length < 15) {
            raisonAdoption.parent().addClass('has-error');
            errors = true;
        } else {
            raisonAdoption.parent().addClass('has-success');
        }

        if (errors === false) {
            $(this).replaceWith('<div class="alert alert-success">Votre demande a bien été envoyée ! Nous vous répondrons dans les meilleurs délais.</div>');
        }
    });


    // On retire les classes .has-success ou .has-error dès que les champs changent
    choixChat.on('change', function(e) {
        $(this).parent().removeClass('has-success has-error');
        errors = false;
    });

    raisonAdoption.on('change', function(e) {
        $(this).parent().removeClass('has-success has-error');
        errors = false;
    });

});


// Evènement
var p = document.getElementById("para");
p.addEventListener("click", changeTexte);

function changeTexte() {
    this.innerHTML = "<strong>Bravo !</strong>";
    this.style.color = "orange";
}


/* Vers le bas : capture
   Vers le haut : bouillonnement
   (par défaut : false, les évènements fonctionnent pendant le bouillonnement)
   (si on met true, les évènements fonctionnent pendant la capture)*/

// e.preventDefault() : l'évènement est neutralisé
// e.stopPropagation() : les évènements sont arrêtés et ne se propagent plus

// Autre évènement
var p2 = document.getElementById("ouv");
p2.addEventListener("click", function fenetre() {
    window.open("http://www.google.fr", "_blank", "width=500, height=300");
})

// Ouvrir et fermer une nouvelle fenêtre
var ouvrir = document.getElementById("ouvrir");
var fermer = document.getElementById("fermer");
var fenetre = "";
ouvrir.addEventListener("click", function fOuvrir() {
    fenetre = window.open("http://www.google.fr", "_blank", "width=500");
});
fermer.addEventListener("click", function fFermer() {
    fenetre.close();
});


var hauteur = screen.height;
var hauteurDispo = screen.availHeight;
var reso = screen.pixelDepth;
var para1 = document.getElementById("taille");
para1.innerHTML = "Hauteur de l'écran " + hauteur +
    "<br>Hauteur dispo : " + hauteurDispo +
    "<br>Résolution : " + reso + "bits/px";
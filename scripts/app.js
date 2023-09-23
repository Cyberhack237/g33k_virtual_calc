/*
 ███▄    █  ▄████▄  
 ██ ▀█   █ ▒██▀ ▀█  
▓██  ▀█ ██▒▒▓█    ▄ the javaScript side
▓██▒  ▐▌██▒▒▓▓▄ ▄██▒ coded by geek-neo
▒██░   ▓██░▒ ▓███▀ ░
░ ▒░   ▒ ▒ ░ ░▒ ▒  ░
░ ░░   ░ ▒░  ░  ▒   
   ░   ░ ░ ░        
         ░ ░ ░      
           ░        
*/
alert("thank for viewing of my code! ")



 // La fonction de limitation de la longueur de l'input de value par user
function limitLenght(){
  var afficher= document.querySelector("input.afficher");
  afficher.size = 10;
  afficher.maxLegth =10;
}
// la fonction de gestion de touche
function keys(digit){
  var afficher = document.querySelector(".afficher");
  let tempsValue = "";
  limitLenght()
  tempsValue += digit;
  afficher.value += tempsValue;
}

// Function  for ckearing the screen
function clearAfficher() {
  var afficher = document.querySelector(".afficher");
  afficher.value = "";
}

// function for resultat

function resultat(){

  var afficher= document.querySelector(".afficher");
  try{
    if (afficher.value === ""){
      afficher.innerHTML = "0";
    }else{
      afficher.value = eval(afficher.value);
    }
  }
  catch(Error){
    afficher.innerHTML = "0";
  }
}

// une fonction qui retourne la racine carré des valeurs entre dans l'afficheur
var sqr = function () {
  var afficher = document.querySelector(".afficher");
  try {
    afficher.value = afficher.value ** 2;
    
  } catch (error) {
    afficher.value = "0";
  }
}

// La fonction d'explonation d'une valeur entrer par user 
var exp = function () {
  var afficher = document.querySelector(".afficher");
  afficher.value = afficher.value * afficher.value;
}

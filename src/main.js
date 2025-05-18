import './style.css'

const morseCode = {
  
  "A": "·-",    "B": "-···",  "C": "-·-·",  "D": "-··",
  "E": "·",     "F": "··-·",  "G": "--·",   "H": "····",
  "I": "··",    "J": "·---",  "K": "-·-",   "L": "·-··",
  "M": "--",    "N": "-·",    "O": "---",   "P": "·--·",
  "Q": "--·-",  "R": "·-·",   "S": "···",   "T": "-",
  "U": "··-",   "V": "···-",  "W": "·--",   "X": "-··-",
  "Y": "-·--",  "Z": "--··",

  "0": "-----", "1": "·----", "2": "··---", "3": "···--",
  "4": "····-", "5": "·····", "6": "-····", "7": "--···",
  "8": "---··", "9": "----·",

  " ": "/",     "?": "··-··", ",": "--··--",":": "---···",
  "'": "·----·","-": "-····-","/": "-··-·", "!": "-·-·--",
  "¿": "··-··", "¡": "-·-·--","_": "··--·-","@": "·--·-·",

};

function traducirAMorse() {
  const texto = document.getElementById("inputText").value.toUpperCase();
  let resultado = "";

  for (let letra of texto) {
    resultado += morseCode[letra] ? morseCode[letra] + " " : letra;
  }

  document.getElementById("resultado").textContent = resultado.trim();
}
window.traducirAMorse = traducirAMorse;

const murcielagoCode = {
  "M": "1",
  "U": "2",
  "R": "3",  
  "C": "4",
  "I": "5",
  "E": "6",
  "L": "7",
  "A": "8",
  "G": "9",
  "O": "0",
};

function traducirAMurcielago() {
  const texto = document.getElementById("inputMurcielago").value.toUpperCase();
  let resultadoMurcielago = "";

  for (let letra of texto) {
    resultadoMurcielago += murcielagoCode[letra] ? murcielagoCode[letra] + "" : letra;
  }

  document.getElementById("resultadoMurcielago").textContent = resultadoMurcielago.trim();
}
window.traducirAMurcielago = traducirAMurcielago;
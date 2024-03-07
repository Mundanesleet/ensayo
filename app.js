/* Proyecto encriptador de texto creado por Alejandro Sossa 23/02/2024*/


// Funcion para encriptar el texto ingresado
function encriptar() {
  let text = document.getElementById("text").value;
  let titleMessage = document.getElementById("title-message");
  let pr = document.getElementById("pr");
  let image = document.getElementById("muneco");
  let textResult = document.getElementById("text-result");
  let buttonCopy = document.querySelector(".btn-copy");

  let textoEncriptado = text
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (text.length != 0) {
    titleMessage.textContent = "";
    pr.textContent = "";
    image.style.display = "none";
    textResult.textContent = textoEncriptado;
    buttonCopy.style.display = "block";
    image.style.display = "none";
    console.log("HOla");
  } else {
    image.style.display = "inline";
    image.src = "img/muneco.png";
    titleMessage.textContent = "Ningún mensaje fue encontrado";
    pr.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Debes ingresar un texto", "WARNING");
    buttonCopy.style.display = "none";
    textResult.textContent = "";
  }
}

// Función para desencriptar el texto ingresado
function desencriptar() {
  let text = document.getElementById("text").value;
  let titleMessage = document.getElementById("title-message");
  let pr = document.getElementById("pr");
  let image = document.getElementById("muneco");
  let textResult = document.getElementById("text-result");
  let buttonCopy = document.querySelector(".btn-copy");

  let textoCifrado = text
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  if (text.length != 0) {
    document.getElementById("text").value;
    titleMessage.textContent = "";
    pr.textContent = "";
    textResult.textContent = textoCifrado;
    buttonCopy.style.display = "block";
    image.style.display = "none";
    console.log("HOla");
  } else {
    image.style.display = "inline";
    image.src = "img/muneco.png";
    titleMessage.textContent = "Ningún mensaje fue encontrado";
    pr.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Debes ingresar un texto", "WARNING");
    buttonCopy.style.display = "none";
    textResult.textContent = "";
  }
}

// Función para limpiar cuando se de click en los botones
function limpiarCaja() {
  document.getElementById("text").value = "";
}

// Función para copiar el texto al portapapeles
function copy() {
  const textResult = document.getElementById("text-result");
  const btnCopy = document.querySelector(".btn-copy");

  if (textResult.textContent.trim() !== "") {
    btnCopy.addEventListener("click", () => {
      var contenido = textResult.textContent;
      navigator.clipboard.writeText(contenido);
      console.log("Texto copiado: " + contenido);
    });
  }
}
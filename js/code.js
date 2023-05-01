const botonCopiar = document.querySelector('#copy');
const textareaSalida = document.querySelector('#salida');  

const initialResultDiv = document.getElementById('initial-result');
const resultTextDiv = document.getElementById('result-text');

// // Ocultar el div de resultado al cargar la página
initialResultDiv.style.display = 'block';
resultTextDiv.style.display = 'none';


const textarea = document.getElementById('ingreso');
const texto = document.getElementById("texto");

textarea.addEventListener("keyup", function(event) {
  const inputValue = this.value;
  const uppercaseRegex = /[A-Z]/;
  const accentRegex = /[áéíóúÁÉÍÓÚ]/;

  if (inputValue.match(uppercaseRegex) || inputValue.match(accentRegex)) {
    texto.classList.add("salto");
    textarea.style.backgroundColor = "#ffcccc";
  } else {
    texto.classList.remove("salto");
    textarea.style.backgroundColor = "";
  }
});



function escogerdiv(textareaValue){
    
    if (textareaValue.trim() !== '') {
        initialResultDiv.style.display = 'none';
        resultTextDiv.style.display = 'block';
    } else {
        initialResultDiv.style.display = 'block';
        resultTextDiv.style.display = 'none';
    }
}


function encriptador(){
    let ingreso;
    let salida;
    ingreso = document.getElementById("ingreso").value;
    escogerdiv(ingreso);
    var mapObj = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
    };

    salida = ingreso.replace(/a|e|i|o|u/g, function(matched){
    return mapObj[matched];
    });
    document.getElementById("salida").value = salida;
    
    //document.getElementById("ingreso").value = "";
}

function desencriptador(){
    initialResultDiv.style.display = 'none';
    resultTextDiv.style.display = 'block';
    let ingreso;
    let salida;
    ingreso = document.getElementById("ingreso").value;
    escogerdiv(ingreso);
    var mapObj = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
    };

    salida = ingreso.replace(/ai|enter|imes|ober|ufat/g, function(matched){
    return mapObj[matched];
    });
    document.getElementById("salida").value = salida;
    
}



botonCopiar.addEventListener('click', () => {
    const textareaValue = textareaSalida.value; // Obtiene el valor del textarea
    navigator.clipboard.writeText(textareaValue) // Copia el valor al portapapeles
      .then(() => {
        console.log('Texto copiado al portapapeles: ' + textareaValue);
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles: ', error);
      });
  });

let botonEncriptador = document.getElementById("encriptador");
botonEncriptador.onclick = encriptador;

let botonDesencriptador = document.getElementById("desencriptador");
botonDesencriptador.onclick = desencriptador;

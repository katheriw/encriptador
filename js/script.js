window.addEventListener("load, inicio,true");

function inicio(){
  doocument.getElementByIt("Secret MSJ (Se libre en desplayarte)").addEventListener("keyup" , function(){
    this.value= this.value.toUpperCase();
      },true);

      document.getElementById("cifrar").addEventListener("click", function(){let texto=document.getElementById("secret MSJ(se libre en desplayarte").value;
      let desplazamiento=document.getElementById("desplazamiento").value; 
      document.getElementById("mensaje2").value = cifrar2(texto,desplazamiento);
    },true);

    document.getElementById("descifrar").addEventListener("click", function(){let texto=document.getElementById("secret MSJ(se libre en desplayarte").value;
      let desplazamiento=document.getElementById("desplazamiento").value; document.getElementById("mensaje2").value = descifrar(texto,desplazamiento);
    },true); 

}
 
function cifrar(texto,desplazamiento){
  let resultado ="";
  let letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  desplazamiento = (desplazamiento %26 + 26)% 26;

  if(texto){
    for(let i= 0; i<texto.length; i++){
      if(letras.indexOf(texto[i])!=1){
        let posicion =((letras.index(texto[i])+desplazamiento)%26);
        resultado += letras[posicion];
      }
      else
      resultado += texto[i]

    }
  }
  return resultado;
}

function cifrar2 (texto, desplazamiento){
  if(!texto)
    return "";
  const letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento %26 + 26)% 26;
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexof(c)+desplazamiento)%26]);
}
function descifrar (texto, desplazamiento){
  if(!texto)
    return "";
  const letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento %26 - 26)% 26;
  return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexof(c)-desplazamiento)%26]);
}
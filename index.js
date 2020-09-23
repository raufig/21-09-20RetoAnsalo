const acumulator = [];
const keyAcumulator = [];
const idLetras = document.getElementById("letras")
const idNumeros = document.getElementById("numeros")
const nyl = {
 1:1,
 2:2,
 3:3,
 4:4,
 5:5,
 6:6,
 7:7,
 8:8,
 9:9,
 10:10,
 "A":11,
 "B":12,
 "C":13,
 "D":14,
 "E":15,
 "F":16,
 "G":17,
 "H":18,
 "I":19,
 "J":20,
}
function mostrar (key, value) {
  const lastIndex = acumulator.length-1;
  let lastElement = acumulator[lastIndex] || 0;
  if ((lastElement === value-1 && value >1 )||(lastIndex === -1 && value ===1)) {
    acumulator.push(value);
    keyAcumulator.push(key);
    
  }else {
    const missing =[];
   while (lastElement < value) {
     lastElement += 1;
     missing.push(getKey(nyl, lastElement));
   }
   missing.pop();
   swal({title: "Error", text: `Lo siento! falta que oprima ${missing}`, icon: "error", button: "OK",});//los que hacen falta
   //alert(`Lo siento! falta que oprima ${missing}`);//los que hacen falta
  }//swal("Good job!", "You clicked the button!"+ keyAcumulator, "success");
   //swal({title: "Good job!", text: 'Usted ha oprimido la tecla' + keyAcumulator, icon: "success", button: "OK",}); 
  alert(`Usted ha oprimido la tecla ${keyAcumulator}`);//los que estan guardados
  let nuevo = keyAcumulator
  let numero = nuevo.pop();

  if (numero )idNumeros.value += numero; 
 
  if (idNumeros.value.length > 11 && numero) idLetras.value += numero
 
  
 
}
function mostrarLetras (numbers, letters) {
 var x = acumulator.indexOf(numbers);
 if (x === -1) {
   mostrar(numbers, nyl[numbers]);
 }else {
   const m = nyl[letters];
   mostrar(letters, m);
 }
}
function getKey (objeto, valor) {
 return Object.keys(objeto).find(function (llave){
   return objeto[llave] === valor;
 })
}

const container = document.getElementById ("container")
const swichDark = document.getElementById ("customSwitch1")
const swichRetro = document.getElementById ("customSwitch2")

swichDark.addEventListener("click", ()=> {
  if(swichDark.checked ){
    localStorage.setItem('color', 'dark')
    container.className = "dark"
    swichRetro.checked = false
    
  }else{
    container.classList.remove ('dark')
  }
  
}) 
swichRetro.addEventListener("click", ()=> {
  if(swichRetro.checked ){
    localStorage.setItem('color', 'retro')
    container.className = "retro"
    swichDark.checked = false
    
  }else{
    container.classList.remove ('retro')
  }
  
}) 
 
if(localStorage['color'] === 'dark') {
  container.className = 'dark'
  swichDark.checked = true
} 
if(localStorage['color'] === 'retro') {
  container.className = 'retro'
  swichRetro.checked = true
} 
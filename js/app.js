//Inicialización de las variables
var numeroFinal="doce";
//Usamos el operador resto para saber si el número es imparpar
var resto=0;
//Comienza la cuenta
for (let i = 0; i <= numeroFinal; i++) {
    resto=i/2;
    if(resto!=0) console.log(resto);
}
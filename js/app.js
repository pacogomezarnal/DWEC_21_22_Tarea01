//Inicialización de las variables
var numeroInicial=3;
var numeroCuenta=numeroInicial;
//Usamos el operador resto para saber si el número es par
var resto=numeroInicial%2;
//Si no es par, debemos incrementar el numeroCuenta
if(resto!=0) numeroCuenta++;
//Comienza la cuenta
for (let i = numeroCuenta; i < 11; i=i+2) {
    console.log(i);
}
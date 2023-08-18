
//Ejercicio 1
var meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

//mostrarlos


for (var i=0; i<meses.length; i++){
    console.log(meses[i]);

}


// Ejercicio 2
var valores =["true","5","false","hola","adios",2];

var texto1= valores[3];
var texto2= valores[4];


if(texto1.length > texto2.length){
console.log(`"${texto1}" es mayor a "${texto2}`);
}else if (texto2.length > texto1.length){
    console.log(`"${texto2}" es mayor a "${texto1}`);
}else {
    console.log (`"${texto1}" y "${texto2}" tienen el mismo tamaño`);
}




var valor1= valores[0];
var valor2 = valores[2]; 

console.log(valor1 || valor2);
console.log(valor1 && valor2);




var num1 = valores[1];
var num2 = valores[5];



console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);






//Ejercicio 3



var numero1 =5;
var numero2=8;

if(numero1<= numero2) {
    console.log("numero1 no es mayor que numero2");
     }




     if(numero2 > 0) {
     console.log("numero2 es positivo");

     }

     if(numero1< 0 || numero2 !== 0) {
        console.log("numero1 es negativo o distinto de cero");
     }

     if(numero1+ 1 <= numero2) {
        console.log("Incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que numero2");

     }




     //Ejercicio 4  

    
     

     function Factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            var Numfactorial = 1;
            for (var i = 2; i <= n; i++) {
                Numfactorial *= i;
            }
            return Numfactorial;
        }
    }
    
    var numero = 5;
    var factorialNumero = Factorial(numero);
    console.log(`El factorial de ${numero} es ${factorialNumero}`);


    
     

    // ejercicio 5 (no funciona)

    function Par_Impar(nmb){
      
        if (numero % 2 === 0) {
            return " este numero es par";
          } else {
            return "este numero es impar";
          }
   
    }

    function result() {

        var nmb = document.getElementById("").value;
        var resultado = Par_Impar(Number(number));
        var resultElement= document.getElementById("resultado");
        resultElement.textContent = `El numero es: ${resultado}`;

    }


//Ejercicio 6
    function informacion(cadena) {
        if (cadena === cadena.toUpperCase()) {
          return "solo tiene mayúsculas.";
        } else if (cadena === cadena.toLowerCase()) {
          return "solo tiene minúsculas.";
        } else {
          return "tiene mayúsculas y minúsculas.";
        }
      }
      
      var texto = "HoLAMELLAMOdAVID";
      var resultadoCad = informacion(texto);
      console.log(resultadoCad);
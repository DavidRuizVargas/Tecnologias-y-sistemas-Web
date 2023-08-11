var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   };

   var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
   };


   var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   }; 



   var pinguinos = [gunter, ramon, fred];

   for (var i = 0; i< pinguinos.length; i++) {
    console.log(pinguinos[i].name);
   }


   console.log("Tamaño de la matriz pingüinos:", pinguinos.length);


   for (var i = 0; i< pinguinos.length; i++) {
    pinguinos[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
   }

   for (var i = 0; i< pinguinos.length; i++) {
    if (pinguinos[i].canFly) {
      console.log(pinguinos[i].name + " ¡puede volar!");
    }
   }


   var pinguinos_con_mas_de_2pies = pinguinos.filter(function(penguin) {
    return penguin.numberOfFeet > 2;
   });
   console.log("Pingüinos con más de 2 pies:", pinguinos_con_mas_de_2pies);
   


   for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].ComidaFavorita = ["pescado", "camarón", "calamar"];
   }
   


   console.log("Segunda comida favorita de", gunter.name + ":", gunter.ComidaFavorita[1]);
   console.log("Segunda comida favorita de", ramon.name + ":", ramon.ComidaFavorita[1]);
   console.log("Segunda comida favorita de", fred.name + ":", fred.ComidaFavorita[1]);

   pinguinos[pinguinos.length - 1].ComidaFavorita[2] = "piñas";


 for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].ComidaFavorita[2]="piñas";
    console.log("Comidas favoritas de", pinguinos[i].name + ":", pinguinos[i].ComidaFavorita.join(", "));
    
    
}

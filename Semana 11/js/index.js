alert('Hola');
//variables: String number boolean []
//tipo



// la diferencia es el scope= ambito

//let: variable local 
//var: variable global


/*var nombre='Pedro';


let apellido='Perez';*/




if(true){

    var nombre='Pedro';
    //let apellido='Perez';
    
}

alert(nombre);
//alert(apellido);

let bandera= true;
let edad=15; 
let precio=3.35;

let lista=[];


let fecha= new Date().getDate();

alert (fecha);



// coercion: aunque sea 1 string y otro sea entero numerico como javascript es un tipado dinamicolos compara, aunque los tipos de datos no sean los mismos 
if(5=="5"){


 alert('siiiiii')

}else{

    alert('nooo')

}



const PI=3.14;


const Persona ={
    cedula:'11111111',
    nombre: 'Pedro',
    apellido: 'Perez',
    apellido2: 'Rojas',
    edad: 15




}
alert(`El nombre de la perona es ${Persona.nombre} y tiene una edad de ${Persona.edad}`)


let tiene= Persona.hasOwnProperty('edad'); 
alert(tiene);



let TienePerro=true;
alert(TienePerro); 

if(TienePerro){
    alert('tiene perro');

    }else{
            alert('no tiene perro');
        
    }


let listaColores=['Rojo','Verde','Azul'];
alert(listaColores[1].length);
alert(listaColores.length);



for(let i=0; i<listaColores.length; i++ ){



    console.log(listaColores[i]);

}
console.log('foreach');

    listaColores.forEach((valor,index) => {


        if(index % 2==0){
        console.log(`El valor es: ${valor} y el indice es ${index}`);
        
        }
    
    
    });



console.log('map');
    listaColores.map((valor,index) =>{
        console.log(`El valor es: ${valor} y el indice es ${index}`);
            
}).filter(x=>x=='Rojo');


const listaPersonas=[{

    id:'6666',
    nombre:'Pedro',
    apellido:'Perez',
    edad:50

},
{
id:'111',
nombre:'Maria',
apellido:'Rojas',
edad:43


},{


    id:'2222',
    nombre:'Roberto',
    apellido:'Ruiz',
    edad:30

}]

const listResults =listaPersonas.map((persona,index)=>{

let nombre =`Mi nombre es ${persona.nombre} ${persona.apellido}`;
return{
id:index,
cedula: persona.id,
nombre:nombre,
edad:persona.edad


}

}).filter(x=>x.edad>18);

console.log(...listResults);

/*

function saludar2(){
    alert(prueba);
}


function saludar(){
    var prueba=5;


}


saludar2();
saludar();
*/
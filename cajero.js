const PASSWORD ="0101";
let password;
let retiro;
let respuesta;
let saldo = 100;
let repetir = false;
do {

    password = prompt("ingrese contraseña: ");
    
    if(password == PASSWORD){
        alert("saldo actual " + saldo);

        retiro = prompt("ingrese retiro");

        if(Number.isNaN(parseInt(retiro))){
            alert("NO VALIDO");
            repetir = true;
            continue;
        
        }

        saldo = saldo - parseInt(retiro);
        alert("le queda: " + saldo);

        respuesta = prompt("INGRESE UN NUEVO RETIRO si | no")

        if(respuesta == "si"){
            repetir = true;
        }else{
            repetir = false;
    }

        
    }else{
        alert("NO VALIDO");
    }

} while (password != PASSWORD || repetir == true);
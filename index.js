let btnLogin = document.getElementById("btn-login");
let btnIngresar = document.getElementById("btn-ingresar");
let btnCrearCuenta = document.getElementById("btn-crear-cuenta");
let btnconsultar = document.getElementById("btn-consultar");
let btnRetirar = document.getElementById("btn-retirar");
let seccionLogin = document.getElementById("seccionLogin");
let seccionPrincipal = document.getElementById("seccionPrincipal");
let seccionIngresarMonto = document.getElementById("seccionIngresarMonto");
let seccionRetirarMonto = document.getElementById("seccionRetirarMonto");
let seccionConsultarMonto = document.getElementById("seccionConsultarMonto");
//Ocultando sección principal
seccionPrincipal.hidden = true;
seccionIngresarMonto.hidden = true;
seccionRetirarMonto.hidden = true;
//seccionConsultarMonto.hidden = true;



var usuarios = [{
    usuario: "Mali",
    pass: "123",
    saldo: 200,
  },
  {
    usuario: "Gera",
    pass: "456",
    saldo: 290,
  },
  {
    usuario: "Maui",
    pass: "789",
    saldo: 67,
  },
];

let usuarioActual;
let nuevoUsuario;

function login(name, password) {
  let flagAlert = true;
  let alert = document.getElementById("liveAlert");
  for (let i = 0; i < usuarios.length; i++) {
    let tmpUsuario = usuarios[i];
    //Esta es la validacio para ver si si existecuenta el usuario
    if (
      name.toLowerCase() === tmpUsuario.usuario.toLowerCase() &&
      password === tmpUsuario.pass
    )
    
    
    {
        alert.classList.add("alert-primary");
        alert.innerText="Login Exitoso!!!";
        
      flagAlert = false;
      //Oculto la sección de login (el formulario)
      seccionLogin.hidden = true;
      //Muestro la sección principal (los botones)
      seccionPrincipal.hidden = false;

      
      usuarioActual = tmpUsuario;
      console.log(usuarioActual);
      break;

      
    }
  }

  if (flagAlert == true) {
    alert.classList.add("alert-danger");
    alert.textContent = "Upps!! Revisa usuario y contraseña!!";
  }
}
btnLogin.addEventListener("click", function () {

    let usuario = document.getElementById("txt-user").value;
    let password = document.getElementById("txt-pass").value;
    console.log("Click en el botón");
  
    login(usuario, password);
  });
  

function ingresar(ingreso) {
  if (usuarioActual.saldo + ingreso > 990)  {
    alert("Tu saldo no puede ser mayor a 990");
  } else {
    //usuarioActual.saldo+=ingreso
    usuarioActual.saldo = usuarioActual.saldo + ingreso;
    let pSaldoIngresado = document.getElementById("p-saldo-ingresado");
    let ppNuevoSaldo = document.getElementById("p-nuevo-saldo");
    pSaldoIngresado.innerText = "El saldo que ingresaste es: " + ingreso;
    ppNuevoSaldo.innerText = "Tu nuevo saldo es " + usuarioActual.saldo;
 

  }
  
}



btnIngresar.addEventListener("click", function () {
  seccionIngresarMonto.hidden = false;
});

let btnAceptarIngreso = document.getElementById("btn-aceptar-ingreso");
btnAceptarIngreso.addEventListener("click", function () {
  let ingreso = parseInt(document.getElementById("input-ingreso").value);
  ingresar(ingreso);
});

function retirar(retiro) {
  if (usuarioActual.saldo - retiro < 10) {
    alert("Tu saldo no puede ser menor a 10");
  } else {
    //usuarioActual.saldo+=ingreso
    usuarioActual.saldo = usuarioActual.saldo - retiro;
    let pSaldoRetirado = document.getElementById("p-saldo-retirado");
    let ppNuevoSaldo = document.getElementById("p-nuevo-saldo");
    pSaldoRetirado.innerText = "El saldo que retiraste es: " + retiro;
    ppNuevoSaldo.innerText = "Tu nuevo saldo es " + usuarioActual.saldo;

  }

};

btnRetirar.addEventListener("click", function () {
  seccionRetirarMonto.hidden = false;
});

let btnAceptarRetiro = document.getElementById("btn-aceptar-retiro");
btnAceptarRetiro.addEventListener("click", function () {
  let retiro = parseInt(document.getElementById("input-retiro").value);
  retirar(retiro);
});

function consultar() {

  //let saldoD = document.getElementById("saldoD");
  saldoD.innerText = "Tu  saldo es " + usuarioActual.saldo;

}
btnconsultar.addEventListener("click", function () {
  seccionConsultarMonto.hidden = false;

  consultar()
});

function crearCuenta(Nombre,pass,usaldo) {
    let existecuenta = true;
    while (existecuenta !== false) {
      if (Nombre !== null) {
        // Verificar si existecuenta la cuenta
        for (let i = 0; i < usuarios.length; i++) {
          if (Nombre === usuarios[i].usuario) {
            existecuenta = true;
            alert("Error, el usuario ya existe.");
            break;
          } else {
            existecuenta = false;
          }

        }
        if(existecuenta == false ){
            usuarios.push({usuario: Nombre,pass: pass });
              alert('Su cuenta ha sido guarda correctamente"' + Nombre + '" con la contraseña de"' + pass + '"  ');
            }
    
    }
    else{
        break;
    }
    
}
}

        btnCrearCuenta.addEventListener("click", function () {
        
            let Nombre= document.getElementById("txt-user").value;
            let pass = document.getElementById("txt-pass").value;
            //let usaldo= document.getElementById("usaldo").value;
            console.log("Click en el botón");
          
                crearCuenta(Nombre, pass);
          });
          
  
  
  
  
  
  



function operacion1() {

  usuarios[i]
  let saldo = parseInt(document.getElementById("cantidad").value);
  let cantidad1 = parseInt(document.getElementById("c1").value);
  let cantidad2 = parseInt(document.getElementById("c2").value);

  document.getElementById("c1").value = (cantidad1 - cantidadT);
  document.getElementById("c2").value = (cantidad2 + cantidadT);

}

function operacion2() {
  let cantidadT = parseInt(document.getElementById("cantidad").value);
  let cantidad1 = parseInt(document.getElementById("c1").value);
  let cantidad2 = parseInt(document.getElementById("c2").value);

  document.getElementById("c1").value = (cantidad1 + cantidadT);
  document.getElementById("c2").value = (cantidad2 - cantidadT);
}
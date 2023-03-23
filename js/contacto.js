let nombre_completo, correo, telefono, rol, asunto, mensaje;
console.log('Hola');


let send = () => {
    nombre_completo = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    telefono = document.getElementById('telefono').value;
    rol = document.getElementById('rol').value;
    asunto = document.getElementById('asunto').value;
    comentario = document.getElementById('mensaje').value;
    console.log(nombre_completo);
    console.log(correo);
    console.log(telefono);
    console.log(rol);
    console.log(asunto);
    console.log(comentario);

    if(!correo.includes('@'))
    {
        alert('El correo debe tener un @')
    }

    verify();
}

function verify()
{
    if(nombre_completo == '')
    {
        alert('Debe ingresar un nombre');
    }

    if(telefono == '')
    {
        alert('Debe ingresar un telefono');
    }

    if(asunto == '')
    {
        alert('Debe ingresar un asunto');
    }

    if(mensaje == '')
    {
        alert('Debe ingresar un mensaje');
    }
}

let button = document.querySelector('button');

button.addEventListener('click', send);


let nombre_completo, correo, telefono, sexo, grado, comentario;
console.log('Hola');


let send = () => {
    nombre_completo = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    telefono = document.getElementById('telefono').value;
    sexo = document.getElementById('sexo').value;
    grado = document.getElementById('grado').value;
    comentario = document.getElementById('comentario').value;
    console.log(nombre_completo);
    console.log(correo);
    console.log(telefono);
    console.log(sexo);
    console.log(grado);
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
        alert('Debe Ingresar un nombre');
    }

    if(telefono == '')
    {
        alert('Debe Ingresar un telefono');
    }
}



let button = document.querySelector('button');

button.addEventListener('click', send);




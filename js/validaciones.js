
const form = document.getElementById('formulario_registro');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const edadInput = document.getElementById('edad');
const correoInput = document.getElementById('correo');
const contrasenaInput = document.getElementById('contrasena');
const loginForm = document.querySelector('#loginModal form');
const contrasena_inicioInput = document.getElementById('contrasena_inicio');
const contrasenaError = document.getElementById('contrasena_inicio_error');

// Validación para el formulario de inicio de sesión
document.addEventListener('DOMContentLoaded', function () {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contrasenaError.textContent = '';
        let valid = true;
        const contrasena = contrasena_inicioInput.value;
        let contrasenaErrorMsg = '';
        if (contrasena === '') {
            contrasenaErrorMsg = 'Por favor ingresa una contraseña válida';
            valid = false;
        } else {
            const hasNumber = /[0-9]/.test(contrasena);
            const hasUppercase = /[A-Z]/.test(contrasena);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
            const lengthValid = contrasena.length >= 8 && contrasena.length <= 15;

            if (!lengthValid) {
                contrasenaErrorMsg += 'La contraseña debe tener entre 8 y 15 caracteres. ';
                valid = false;
            }
            if (!hasNumber) {
                contrasenaErrorMsg += 'Requiere al menos un número. ';
                valid = false;
            }
            if (!hasUppercase) {
                contrasenaErrorMsg += 'Requiere al menos una mayúscula. ';
                valid = false;
            }
            if (!hasSpecialChar) {
                contrasenaErrorMsg += 'Requiere al menos un carácter especial. ';
                valid = false;
            }
        }
        contrasenaError.textContent = contrasenaErrorMsg.trim();
        if (valid) {
            alert('Iniciaste sesión correctamente')
            loginForm.submit();
        }
    });
});

//Validación para el formulario de registro
form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('nombre_error').innerHTML = '';
    document.getElementById('apellido_error').innerHTML = '';
    document.getElementById('edad_error').innerHTML = '';
    document.getElementById('correo_error').innerHTML = '';
    document.getElementById('contrasena_error').innerHTML = '';

    let valid = true;

    if (nombreInput.value === '') {
        document.getElementById('nombre_error').innerHTML = 'Por favor ingresa un nombre válido';
        valid = false;
    }
    if (apellidoInput.value === '') {
        document.getElementById('apellido_error').innerHTML = 'Por favor ingresa un apellido válido';
        valid = false;
    }
    if (edadInput.value === '') {
        document.getElementById('edad_error').innerHTML = 'Por favor ingresa una edad válida';
        valid = false;
    } else if (parseInt(edadInput.value, 10) < 17) {
        document.getElementById('edad_error').innerHTML = 'Debe ser mayor de 17 años para registrarse';
        valid = false;
    }

    if (correoInput.value === '') {
        document.getElementById('correo_error').innerHTML = 'Por favor ingresa un correo válido';
        valid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoInput.value)) {
            document.getElementById('correo_error').innerHTML = 'El correo debe ser válido';
            valid = false;
        }
    }

    const contrasena = contrasenaInput.value;
    let contrasenaError = '';
    if (contrasena === '') {
        contrasenaError = 'Por favor ingresa una contraseña válida';
        valid = false;
    } else {
        const hasNumber = /[0-9]/.test(contrasena);
        const hasUppercase = /[A-Z]/.test(contrasena);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
        const lengthValid = contrasena.length >= 8 && contrasena.length <= 15;

        if (!lengthValid) {
            contrasenaError += 'La contraseña debe tener entre 8 y 15 caracteres. ';
            valid = false;
        }
        if (!hasNumber) {
            contrasenaError += 'Requiere al menos un número. ';
            valid = false;
        }
        if (!hasUppercase) {
            contrasenaError += 'Requiere al menos una mayúscula. ';
            valid = false;
        }
        if (!hasSpecialChar) {
            contrasenaError += 'Requiere al menos un carácter especial. ';
            valid = false;
        }
    }
    document.getElementById('contrasena_error').innerHTML = contrasenaError.trim();

    if (valid) {
        alert('Te haz registrado correctamente')
        form.submit();
    }
});


//JQuery validacion menu registro
// $(document).ready(function(){
//     $('#formulario_registro').submit(function(event){
//         event.preventDefault();

//         $('#nombre_error').text('')
//         $('#apellido_error').text('')
//         $('#edad_error').text('')
//         $('#correo_error').text('')
//         $('#contrasena_error').text('')
        
//         if($('#nombre').val() === ''){
//             $('#nombre_error').text('Por favor ingresa un nombre válido')
//             return;
//         }

//         if($('#apellido').val() === ''){
//             $('#apellido_error').text('Por favor ingresa un apellido válido')
//             return;
//         }

//         if($('#edad').val() === ''){
//             $('#edad_error').text('Por favor ingresa una edad válida')
//             return;
//         }

//         if($('#correo').val() === ''){
//             $('#correo_error').text('Por favor ingresa un correo válido')
//             return;
//         }

//         if($('#contrasena').val() === ''){
//             $('#contrasena_error').text('Por favor ingresa una contraseña válido')
//             return;
//         }

//         this.submit();

//     })
// })

const password = document.getElementById('password')
const icon_eye= document.querySelector('.bx')
const user=document.getElementById('username')
const btnSubmit=document.querySelector('button')


//mostrar contraseña
icon_eye.addEventListener('click',mostrar =>{
    if (password.type==="password") {
        password.type="text";
        icon_eye.classList.remove('bx-show-alt')
        icon_eye.classList.add('bx-hide')
        
    }else{
        password.type="password"
        icon_eye.classList.remove('bx-hide')
        icon_eye.classList.add('bx-show-alt')
    }
})


// Agregar un evento de clic al botón
btnSubmit.addEventListener('click', function() {
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (user && password) {
        window.location.href='paginaPrueba.html'
    }else{
        alert("Campos Vacios ingresa credenciales")
    }


    console.log('Se hizo clic en el botón de envío');
});


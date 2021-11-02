$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 50){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }
    })
})
const formulario = document.getElementById('formS');
const inputs = document.querySelectorAll('#formS input');

const expresiones = {
	grupo: /^[a-zA-Z0-9\_\-]{4,10}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const validarFormulario =(e) =>{
	switch(e.target.name){
		case "grupo":
			break;
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('invalid')
				document.getElementById('grupo__nombre').classList.add('valid')
			}else{
				document.getElementById('grupo__nombre').classList.add('invalid')
			}
			break;
		case "password":
			break;
		case "password2":
			break;
		case "email":
			break;
		
	}
}
inputs.forEach((input)=>{
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
formS.addEventListener('submit', (e) =>{
	e.preventDefault();
});
var nombre = $("#nombre").val();
var email = $("#email").val();
var asunto = $("#asunto").val();
var mensaje = $("#mensaje").val();
$(document).ready(function(){

	var ScrollLink = $('.scroll')

	ScrollLink.click(function(e) {
		e.preventDefault()
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, )
	});
	$(function($){
		$("form").submit(function(event){
			event.preventDefault();
			if(nombre == ""){
				$("#mensajeAlerta").fadeIn();
				}
			else if(email == ""){
				$("#mensajeAlerta").fadeIn();
			}
			else if(asunto == ""){
				$("#mensajeAlerta").fadeIn();
			}
			else if(mensaje == ""){
				$("#mensajeAlerta").fadeIn();
			}
			else{
			$.ajax({
		    url: "https://formspree.io/maximiliano.mansilla@estudiante.ceibal.edu.uy", 
		    method: "POST",
		    data:{
		    	nombre: $("#nombre").val(),
		    	email: $("#email").val(),
		    	asunto: $("#asunto").val(),
		    	mensaje: $("#mensaje").val(),
			},
		    dataType: "json"
			}).done(function(){
				$("#nombre").val(""),
		    	$("#email").val(""),
		    	$("#asunto").val(""),
		    	$("#mensaje").val(""),
				alert('Mensaje enviado con éxito, en breve me estaré comunicando!');
			}).fail(function(){
				alert('Error de mensaje, vuelve a intentarlo mas tarde!');
			});
			$("#mensajeAlerta").fadeOut();
			}
		});
	});
});

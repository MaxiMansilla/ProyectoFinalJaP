$(document).ready(function(){

	var ScrollLink = $('.scroll')

	ScrollLink.click(function(e) {
		e.preventDefault()
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, )
	});
/*	$('#nombre').focusout(function(){
		if($(this).val().length == 0){
			$('#mensajeAlerta').fadeIn();
		}
	});
	$('#email').focusout(function(){
		if($(this).val().length == 0){
			$('#mensajeAlerta').fadeIn();
		}
	});
	$('#asunto').focusout(function(){
		if($(this).val().length == 0){
			$('#mensajeAlerta').fadeIn();
		}
	});
	$('#mensaje').focusout(function(){
		if($(this).val().length == 0){
			$('#mensajeAlerta').fadeIn();
		}
*/	});

	$(function($){
		$("form").submit(function(event){
			event.preventDefault();
			if($("#nombre").val().length == 0){
				$('#mensajeAlerta').fadeIn();
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
			}
		});
	});

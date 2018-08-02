window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
$(document).ready(function(){
	var ScrollLink = $('.scroll')
	ScrollLink.click(function(e) {
			e.preventDefault()
			$('body,html').animate({
				scrollTop: $(this.hash).offset().top
			}, )
		});	
		$('#logo_link').hover(function(){
			$('#logo_link').toggleClass('fadeIn');
		});
	});

$("#jumbotron-boton").click(function(){
	$("#acercaDeMi").click();
})

	$(function($){
		$("form").submit(function(event){
			event.preventDefault();
			if($("#nombre").val().length == 0 || $("#email").val().length == 0 || $("#asunto").val().length == 0 || $("#mensaje").val().length == 0){
				$('#mensajeAlerta').fadeIn();
				if ($("#nombre").val().length == 0) {
					$("#nombre").addClass("form-error");	
				}
				if ($("#email").val().length == 0) {
					$("#email").addClass("form-error");	
				}
				if ($("#asunto").val().length == 0) {
					$("#asunto").addClass("form-error");	
				}
				if ($("#mensaje").val().length == 0) {
					$("#mensaje").addClass("form-error");	
				}				
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
					$('#mensajeAlerta').fadeOut();
					if($("#nombre").hasClass("form-error")){
						$("#nombre").removeClass("form-error")
					}
					if($("#email").hasClass("form-error")){
						$("#email").removeClass("form-error")
					}			
					if($("#asunto").hasClass("form-error")){
						$("#asunto").removeClass("form-error")
					}
					if($("#mensaje").hasClass("form-error")){
						$("#mensaje").removeClass("form-error")
					}							
				}).fail(function(){
					alert('Error de mensaje, vuelve a intentarlo mas tarde!');
				});
			}
		});
	});

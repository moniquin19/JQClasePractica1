$(document).ready(fuction(){

  var iconcircle = $('.slider li').length; //numero de sliders
  //agregando paginas//
  for (var i = 1; i <= iconcircle; i++) {
    $('.paginas').append(<li><span class="fa fa-circle" aria-hidden="true"></span></li>);
  }

	$('.slider li').hide(); //ocultamos todos los sliders//
  $('.slider li:first').show(); //mostramos al primer slider//
  $('.paginas li:first').css({'color': '#ff3385'}); //Damos estilo al primer item de paginas//

//funciones//

fuction paginas(){
  $('.slider')
}
//ejecución de funciones//


});

function hola(){
  console.log('hola');
}

//hola();

$(document).ready(function() {
   $("p.cambiar").html('agus esta feliz').css('background-color','blue').css('color','white');
   $("p.cambiar").on('click',function(){
   alert('cambio');
   });
   $("article>p").append("<h2>hola</h2>");
   var frutas=["papaya","arandano","kiwi"];
   var ul=$("<ul>");
   for (var i = 0; i < frutas.length; i++) {
     ul.append("<li>"+frutas[i]+"</li>");
   }
   $("article>p").append(ul);
});

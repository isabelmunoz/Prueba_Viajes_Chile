/* realiza el efecto smooth entre el menú y body*/

const links = document.querySelectorAll(".navbar-nav a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}


/* esconde el contenido de las card*/
$( ".card-title" ).click(function() {
    $( ".card-text" ).toggle();
  });


	
      $("#icon_1").mouseover(function(event){
        $("#icon_1").addClass("cambio_size");
     });
     $("#icon_1").mouseout(function(event){
        $("#icon_1").removeClass("cambio_size");
     });
     $("#icon_2").mouseover(function(event){
        $("#icon_2").addClass("cambio_size");
     });
     $("#icon_2").mouseout(function(event){
        $("#icon_2").removeClass("cambio_size");
     });
     $("#icon_3").mouseover(function(event){
        $("#icon_3").addClass("cambio_size");
     });
     $("#icon_3").mouseout(function(event){
        $("#icon_3").removeClass("cambio_size");
     });
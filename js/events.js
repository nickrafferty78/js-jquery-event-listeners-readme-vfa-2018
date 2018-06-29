//define functions here
function getIt(){
$( 'p' ).click(function() {
  alert( "Hey!" );
});
}
function frameIt(){
  $("img").load(function(){
    $('img').addClass("tasty");
});
}

function pressIt(){
    $( "#typing" ).on( "keydown", function( event ) {
  if (event.which == 71){
    alert();
  }
});
}

function submitIt(){
$("form").submit(function(){
    alert("Your form is going to be submitted now.");
});
}

$(document).ready(function(){


getIt();
frameIt();
pressIt();
submitIt();

});

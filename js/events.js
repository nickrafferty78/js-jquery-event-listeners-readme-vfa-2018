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
  $("#typing").keydown(function(){
    var x = event.which;
    if(x==71){
    alert('G');
    }
  });
}
function submitIt(){
  $( "#typing" ).submit(function() {
  alert( "Your form is going to be submitted now." );
});
}

$(document).ready(function(){


getIt();
frameIt();

});

$("#button-show").click(function(){
  $("#text").show("slow");
  $("#button-hide").show();
});

$("#button-hide").click(function (){
    $("#text").hide("slow");
    $("#button-hide").hide("quick");

});
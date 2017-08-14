function groc(){
  var gro = [];
  for (var i = 0; i < 5; i++){
    gro[i] = $("input#gro" + (i + 1)).val();
  }
  upper = gro.map(function(groc){
    return groc.toUpperCase();
  });
  upper.sort();
  alert(upper);

  for (var i = 0; i < upper.length < i++){
      $("#groc" + (i + 1)).text(gro[i]);
  }

  $("#list").hide();
  $("#hidden-list").show();


}




$(document).ready(function() {

});

function groc(){
  var gro = [];
  for (var i = 0; i < 5; i++){
    gro[i] = $("input#gro" + (i + 1)).val();
  }
  upper = gro.map(function(groc){
    return groc.toUpperCase();
  });
  upper.sort();
  for (var x = 0; x < upper.length; x++){
      $("#groc" + (x + 1)).text(upper[x]);
  }
  $("#list").hide();
  $("#hidden-list").show();
}
$(document).ready(function() {
});

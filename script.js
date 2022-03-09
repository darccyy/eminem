function init() {
  $("#hue").val(180);
  update();
}

function update(){ 
  $(".fg").css("filter", `hue-rotate(${parseInt($("#hue").val()) + 180}deg)`);
}
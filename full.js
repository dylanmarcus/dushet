var colors = ["#4593e3", "#9e54bd", "#2ac46c", "#f06060", "#fcd04a"];
var itemIndex = 0;
var height;
var dunzo = 0; //yeknow dunzo aint no ordinary wordage bruh bruh
$('input').on('keyup', function(e) {
    if (e.keyCode === 13) {
      if(itemIndex < 5){
        height = 600/(itemIndex+1);
        $("li").css("height", height+"px");
        $(".done").css("height", height/2+"px");
        /*if ($("li").height < height){
          $("li").css("height", height/2+"px");
        }
        else {
          $("li").css("height", height+"px");
        }*/
        $("."+itemIndex).css("background-color", colors[itemIndex]);
        $("."+itemIndex).html($("input").val());
        $("input").val("");
        $(".addbutton").toggleClass("rotated");
        $(".textInput").toggle("slide", {
          direction: "right",
          duration: 300,
          easing: "easeOutQuart"
        });
        $("."+itemIndex).show("slide", {
          duration: 800,
          easing: "easeOutElastic"
        });
        itemIndex++;
      }

    }
});

$(".addbutton").click(function(){
  $(".addbutton").toggleClass("rotated");
  $(".textInput").toggle("slide", {
    direction: "right",
    duration: 300,
    easing: "easeOutQuart"
  });
});

var timeout_id = 0;
$("li").mousedown(function(){
  var thisli = $(this);
  timeout_id = setTimeout(function(){
    $(thisli).css("opacity", ".7");
    $(thisli).css("height", height/2);
  }, 1000);
  $(this).addClass("done");
  dunzo++;

}).bind("mouseup mouseleave", function(){
  clearTimeout(timeout_id);
});
if (dunzo > itemIndex){
  alert("You deeit eeeeit!");
}

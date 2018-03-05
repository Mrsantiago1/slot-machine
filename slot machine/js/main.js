var reel = ["images/item1.jpg","images/item2.jpg","images/item3.jpg","images/item4.jpg","images/item5.jpg"]
var total = 0
var wager = 0
var result
function lever() {
  var indexA= Math.round(Math.random()*reel.length);
  var indexB= Math.round(Math.random()*reel.length);
  var indexC= Math.round(Math.random()*reel.length);
  $("#reelImgA").attr("src",reel[indexA]);
  $("#reelImgB").attr("src",reel[indexB]);
  $("#reelImgC").attr("src",reel[indexC]);
}
//set max & min

  if($("#reelImgA").attr("src") == $("#reelImgB").attr("src") && $("#reelImgB").attr("src") == $("#reelImgC").attr("src")){
      $("#total").text(total += wager*2)
  }

  else{
    $("#total").text(total -= wager)
  }
  function min(){
    wager += 1;
    alert("You have now bet "+wager)
    if($("#reelImgA").attr("src") == $("#reelImgB").attr("src") && $("#reelImgB").attr("src") == $("#reelImgC").attr("src")){
        $("#total").text(total += wager*2)
    }

    else{
      $("#total").text(total -= wager)
    }
  }
  function max(){
    wager += 10
    alert("You have now bet "+wager)
  };

$(document).ready(function(){
//creat event listeners
$("#slotLever").on("click",lever);
$("#minBtn").on("click", min);
$("#maxBtn").on("click", max);
//user can pull lever
});

$(document).ready(function(){
  $(".menu-icon").on("click", function(){
    $(".sidebar").toggleClass("active");
  });
});
function myMap() {
  var myCenter = new google.maps.LatLng(21.502609,70.419346)
  var mapProp= {
    center:myCenter,
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map); 
}
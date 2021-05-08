$(document).ready(function(){
  $(".menu-icon").on("click", function(){
    $(".sidebar").toggleClass("active");
  });
  $(".verticle-nav .menu-list li a").on("click", function(){
    $(".sidebar").toggleClass("active");
  })
  $(".testimonials.slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
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
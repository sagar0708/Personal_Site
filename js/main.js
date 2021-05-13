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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $(".techno").infiniteslide({
    'speed': 50,
    'pauseonhover':false
  });
  // mouse follower
  var follower = $(".cursor-follower");
  var posX = 0,
      posY = 0;

  var mouseX = 0,
      mouseY = 0;
  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / 8;
      posY += (mouseY - posY) / 8;
  
      TweenMax.set(follower, {
        css: {
        left: posX - 8,
        top: posY - 8
        }
      });
    }
  });
  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Typing effect
  var typed = new Typed(".profession-title > span",{
    strings: ['frontend developer', 'freelancer', 'web designer', 'web developer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  })

  // GSAP effect
  
});  
// Google Map
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
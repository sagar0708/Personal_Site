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

function loaderIcons(){
  var tl = gsap.timeline();
  tl.to(".loader-icons .fa-star",1,{fontSize:60, ease:'bounce'});
  tl.to(".loader-icons .fa-star",0,{fontSize:0, ease:'bounce'});
  tl.to(".loader-icons .fa-thumbs-up",1,{fontSize:60, ease:'elastic'});
  tl.to(".loader-icons .fa-thumbs-up",0,{fontSize:0, ease:'bounce'});
  tl.to(".loader-icons .fa-heart",1,{fontSize:60, ease:'back'});
  tl.to(".loader-icons .fa-heart",0,{fontSize:0, ease:'bounce'});
  tl.to(".loader-icons .fa-comment",1,{fontSize:60, ease:'bounce', onComplete: loaderIcons});
  tl.to(".loader-icons .fa-comment",0,{fontSize:0, ease:'bounce'});
}
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
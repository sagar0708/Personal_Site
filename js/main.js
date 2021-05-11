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
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline();
  tl.from(".hero",{duration:2, backgroundPosition: "-4000px 0px",ease: "back", delay:1})
  tl.from(".hero .overlay",{duration:1, scale:0, ease: Linear.easeNone},"<1.5")
  tl.from(".menu-icon",{duration:1, x:-200})
  tl.from(".intro .title-name",{duration: 2, x:-2000, ease:'bounce'})
  tl.from(".intro .sub-title",{duration: 2, y:-1000, ease:'elastic'},"<1")
  tl.from(".intro .profession-title",{duration: 1, opacity:0, ease:'back'},"<1")
  tl.from(".intro .contact-btn",{duration: 1.5, rotate:180, scale:0, ease:'back'},"<.5")
  tl.from(".number-box h2", {
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".number-box",
      start: "top 75%"
    }
  })
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
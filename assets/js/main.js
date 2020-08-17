$("#landing-carousel").carousel({
    interval: 3000
});

var carousel1 = $('#landing-carousel').carousel();
var carousel2= $('#text-carousel').carousel();
carousel1.on('slide.bs.carousel', function(event) {
    var to = $(event.relatedTarget).index();
    carousel2.carousel(to);
});

$(document).ready(function() {

    $("#scroll-container").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta);
       event.preventDefault();
    });
 
 });

$('#nav-icon3').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

// function openNav() {
//     $("#overlay").style.width = "100%";
//   }
  
//   function closeNav() {
//     $("#overlay").style.width = "0%";
//   }



// // var fixmeTop = $('.side-menu').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= 300) {
//         $('#side-menu').css({
//             position: 'fixed',
//             top: '43vh',
//             left: '-13vw'
//         });
//     } else {
//         $('#side-menu').css({
//             position: "relative"
//         });
//     }
// });

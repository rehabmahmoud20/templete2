//adjust header height

$(".head").height($(window).height())
$(window).resize(function(){
$(".head").height($(window).height())
slider.css("paddingTop",($(window).height() - $('.slider div').height())/2)

})
//add active class to nav items
$(".nav-items li a").click(function(){
$(this).parent().addClass("active").siblings().removeClass("active")
})

//navbar scroll
let aboutHieght =$(".about").offset().top

$(window).scroll(function(){
   let scrolltop= $(window).scrollTop()//getter
   if(scrolltop > aboutHieght - 50){
       $(".navbar").css("backgroundColor","black")
   } else{
    $(".navbar").css("backgroundColor","transparent")

   }
})
//smooth scroll
$(".nav-items li a").click(function(){
    $('body, html').animate({
    scrollTop: $("#" + $(this).data('value')).offset().top//setter
},1000)
})
//center the slider
let slider = $('.slider')
slider.each(function(){
slider.css("paddingTop",($(window).height() - $('.slider div').height())/2)
})
  
// trigger bxslider
$(document).ready(function(){
    slider.bxSlider({
        pager:false
    });
  });

  //auto slider code
  (function autoSlide(){
$('.t-active').each(function(){
    if(!$(this).is(":last-child")){
        $(this).delay(2000).fadeOut(1000,function(){
            $(this).removeClass("t-active").next().addClass("t-active").fadeIn(1000);
         autoSlide()
        })
    }else{
        $(this).delay(2000).fadeOut(1000,function(){
            $(this).removeClass("t-active")
            $(".t-slide div").eq(0).addClass("t-active").fadeIn(1000);
         autoSlide()
        })
    }
})
  }());
//trigger shuffle links
$(".portfolio ul li").click(function(){
    $(this).addClass("p-active").siblings().removeClass("p-active")
})
//trigger shuffle

var mixer = mixitup('.portfolio');

//trigger nice schroll
$("body").niceScroll({cursorcolor:"#1abc9c",
cursorwidth:"8px",
cursorborder:"1px solid #1abc9c",

});
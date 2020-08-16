$(document).ready(function () {
    //  làm hiệu ứng click trước
    //  hàm này sẽ animate
    var about=$("#about").offset().top;
    var services= $("#services").offset().top;
    var portfolio=$("#portfolio").offset().top;
    var contact=$("section#contact").offset().top;
$("#collapsibleNavId .navbar-nav li:nth-child(1)").click(function (e) { 
    e.preventDefault();
 
    $("body,html").stop().animate({
        scrollTop:about},1000,"easeOutExpo"
);
return false;
    });
    // end about
    $("#collapsibleNavId .navbar-nav li:nth-child(2)").click(function (e) { 
        e.preventDefault();
     
        $("body,html").stop().animate({
            scrollTop:services},1000,"easeOutExpo"
    );
    return false;
        });
// end services 
$("#collapsibleNavId .navbar-nav li:nth-child(3)").click(function (e) { 
    e.preventDefault();
 
    $("body,html").stop().animate({
        scrollTop:portfolio},1000,"easeOutExpo"
);
return false;
    });

    // end portfolio 
    $("#collapsibleNavId .navbar-nav li:nth-child(4)").click(function (e) { 
        e.preventDefault();
     
        $("body,html").stop().animate({
            scrollTop:contact},1000,"easeOutExpo"
    );
    return false;
        });
    //  end contact

//  đóng băng menu
$(window).scroll(function () { 
 var  vitri= $(window).scrollTop();
if(vitri>200){
    $("nav.navbar").addClass("dunglai");
}
else{
    $("nav.navbar").removeClass("dunglai");

}
    return false;
});
//  responsive
// $(window).resize(function () { 
//     $("header#img-header").html($(window).width());
// });
// 

$(window).resize(function () { 
  var  docao=$(window).height();

    $("header#img-header").css({
        'height':docao
    });
});




});




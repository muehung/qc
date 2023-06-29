// goTop button
$("body").append(
    "<a href='#top' class='gotop' id='botton-gotop'><i class='fa fa-arrow-up'></i></a>"
);
var topBtn = $('.gotop');
topBtn.hide();
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
});
topBtn.click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
  return false;
});

    // Navbar
$(function() {
    // 下拉選單
    $('#navDown').click(function(e) {
        e.preventDefault();
        $(this).next('.down-menu').toggleClass('downOpen');
        $(this).toggleClass('rotateIcon');
        return false;
    });

    // 小版選單
    $('.hamburger').on('click',function(){
        $(this).toggleClass('burgerCross');
        $('#nav-xs').toggleClass('burgerOpen');
    })
});
/* Cookies */
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
  /* #END Cookies */


  if ($(window).width() > 767) {
    $(".show_on_mobile").remove();
  
  } else if ($(window).width() < 768) {
    $(".show_on_desktop").remove();
  }
    

var prefLang=getCookie("lang");

var htmlLanguage = $('html').attr('lang');

var pathname = window.location.pathname;
var siteUrl = window.location.href;
var siteUrlSplit = siteUrl.split("/")[3];
var siteUrlSLice = siteUrlSplit.replace('ar','');
var urlAfterSliceAR = siteUrl.substr(siteUrl.indexOf('ar/') + 3);
var urlAfterSliceEN = siteUrl.substr(siteUrl.indexOf('/') + 14);


if ( htmlLanguage == 'en' ) {
  $('.ar_content').remove();
  $('#english_switch').remove();
  $('#english_switch_mobile').remove();
  $("#switch_to_arabic").click(function(){
    setCookie("lang","ar",90);
    window.location.href = "https://al-voip.com/ar/" + urlAfterSliceEN ;
  });
  $("#arabic_switch_mobile").click(function(){
    setCookie("lang","ar",90);
    window.location.href = "https://al-voip.com/ar/" + urlAfterSliceEN ;
  });
  if ( prefLang == 'ar' ) {
    window.location.href = "https://al-voip.com/ar/" + urlAfterSliceEN ;
  } 


} else if ( htmlLanguage == 'ar' ) {
  $('.en_content').remove();
  $('#arabic_switch').remove();
  $('#arabic_switch_mobile').remove();
  $("#switch_to_english").click(function(){
    setCookie("lang","en",90);
    window.location.href = "https://al-voip.com/" + urlAfterSliceAR ;
  });
  $("#english_switch_mobile").click(function(){
    setCookie("lang","en",90);
    window.location.href = "https://al-voip.com/" + urlAfterSliceAR ;
  });
}

$('.department_nav .menu_banner').click(function() {
  $('.submenu2-hover').toggleClass('active');
  $('.department_nav .sub_menu_main').toggleClass('hide');
  $('.department_nav .dropdown-child').toggleClass('hide_child');  
  $(".sub_menu_main").animate({ opacity:'toggle' },350);


});

$('.switch-language').click(function() {
  $('.switch-language .dropdown_menu').toggleClass('hide_element');  
});

$('.switch-currency').click(function() {
  $('.switch-currency .dropdown_menu').toggleClass('hide_element');  
});

$("#switch_to_usd").click(function(){
  setCookie("currency","usd",90);
});
$("#switch_to_eur").click(function(){
  setCookie("currency","eur",90);
});
$("#switch_to_egp").click(function(){
  setCookie("currency","egp",90);
});
$("#switch_to_sar").click(function(){
  setCookie("currency","sar",90);
});


$(document).ready(function() {
  // Selected language symbol in header
  var langSet = getCookie("lang");
  $('#language_set').text(langSet);
  if (!langSet) {
    setCookie('lang', 'en');
    $('#language_set').text('en');
  }



  // wishlist-count-jump
  var jumpInterval;
  $('#wishlist').mouseenter(function() {
     jumpInterval = setInterval(function() {
          $('.wishlist_count').animate({ 
              top: '+=300px' 
          }, 600).animate({ 
              top: '-=300px' 
          }, 600);
      }, 100); // 400ms is the total duration of one jump cycle
  }).mouseleave(function() {
      clearInterval(jumpInterval);
      $('.wishlist_count').stop(true, true).css('top', '0.5em'); // Reset the position
  });

  // cart-count-jump
  var jumpInterval;
  $('.shopping_cart').mouseenter(function() {
      jumpInterval = setInterval(function() {
          $('.cart_items_count').animate({ 
              top: '-=0.5em' 
          }, 600).animate({ 
              top: '+=0.5em' 
          }, 600);
      }, 100); // 400ms is the total duration of one jump cycle
  }).mouseleave(function() {
      clearInterval(jumpInterval);
      $('.cart_items_count').stop(true, true).css('top', '-2em'); // Reset the position
  });

  // Header Side Menu
if ( htmlLanguage == 'en' ) {

  $('.mobile_menu_icon').click(function () {
    $('.mobile_slide_menu .overlay').removeClass('hide');
    $('.mobile_slide_menu .content').removeClass('hide');
    $(".mobile_slide_menu .content").animate({left:'0'},500);
    $(".mobile_slide_menu .overlay").animate({opacity:'1'},1000);
  });

  $('.mobile_slide_menu  .overlay').click(function () {
    $(".mobile_slide_menu .content").animate({left:'-50em'},500);
    $(".mobile_slide_menu .overlay").animate({opacity:'0'},1000);
    $('.mobile_slide_menu .overlay').addClass('hide');
  });

  $('#cls_mobile_menu').click(function () {
    $(".mobile_slide_menu .content").animate({left:'-50em'},500);
    $(".mobile_slide_menu .overlay").animate({opacity:'0'},1000);
    $('.mobile_slide_menu .overlay').addClass('hide');
  });

    // wishlist
    $('.user_wishlist').click(function () {
      $('.wishlist_popup .overlay').removeClass('hide');
      $('.wishlist_popup .content').removeClass('hide');
      $(".wishlist_popup .content").animate({right:'0'},500);
      $(".wishlist_popup .overlay").animate({opacity:'1'},1000);
  
    });
  
      $('.wishlist_popup .overlay').click(function () {
      $(".wishlist_popup .content").animate({right:'-50em'},500);
      $(".wishlist_popup .overlay").animate({opacity:'0'},1000);
      $('.overlay').addClass('hide');
    });
  
    $('.cls_wishlist').click(function () {
      $(".wishlist_popup .content").animate({right:'-50em'},500);
      $(".wishlist_popup .overlay").animate({opacity:'0'},1000);
      $('.wishlist_popup .overlay').addClass('hide');
    });
  

}
  else if ( htmlLanguage == 'ar' ) {
    $('.mobile_menu_icon').click(function () {
      $('.mobile_slide_menu .overlay').removeClass('hide');
      $('.mobile_slide_menu .content').removeClass('hide');
      $(".mobile_slide_menu .content").animate({right:'0'},500);
      $(".mobile_slide_menu .overlay").animate({opacity:'1'},1000);
    });

    $('.mobile_slide_menu  .overlay').click(function () {
      $(".mobile_slide_menu .content").animate({right:'-50em'},500);
      $(".mobile_slide_menu .overlay").animate({opacity:'0'},1000);
      $('.mobile_slide_menu .overlay').addClass('hide');
    });

    $('#cls_mobile_menu').click(function () {
      $(".mobile_slide_menu .content").animate({right:'-50em'},500);
      $(".mobile_slide_menu .overlay").animate({opacity:'0'},1000);
      $('.mobile_slide_menu .overlay').addClass('hide');
    });
  
    // wishlist-Arabic
  $('.user_wishlist').click(function () {
    $('.wishlist_popup .overlay').removeClass('hide');
    $('.wishlist_popup .content').removeClass('hide');
    $(".wishlist_popup .content").animate({left:'0'},500);
    $(".wishlist_popup .overlay").animate({opacity:'1'},1000);

  });

    $('.wishlist_popup .overlay').click(function () {
    $(".wishlist_popup .content").animate({left:'-50em'},500);
    $(".wishlist_popup .overlay").animate({opacity:'0'},1000);
    $('.overlay').addClass('hide');
  });

  $('.cls_wishlist').click(function () {
    $(".wishlist_popup .content").animate({left:'-50em'},500);
    $(".wishlist_popup .overlay").animate({opacity:'0'},1000);
    $('.wishlist_popup .overlay').addClass('hide');
  });

  
  
  }


  $('#search_btn').click(function () {
    $('.h_mobile .searchbox').toggleClass('hide');
    $(".h_mobile .searchbox").animate({opacity:'toggle'},350);
  });




  $('.cls_drpdwn_child').click(function () {
    $('.dropdown-child').hide();
  });

  $('.cls_drpdwn_grandchild').click(function () {
    $('.dropdown-grandchild').hide();
  });

  $('.menu_dropdown .caret_symbol').click(function () {
    $(this).siblings('.dropdown-child').animate({opacity:'toggle'},350);
  });

  
  $('.menuchild_dropdown .caret_symbol').click(function () {
    $(this).siblings('.dropdown-grandchild').animate({opacity:'toggle'},350);
  });

  /*
  $('.menu_dropdown').click(function () {
    $(this).find('.dropdown-child').toggleClass('hide');
  });


  $('.menuchild_dropdown').click(function () {
    $(this).find('.dropdown-grandchild').toggleClass('hide');
  });
  
  $('.cls_drpdwn_child').click(function () {
    $('.dropdown-child').toggleClass('hide');
  });

  $('.cls_drpdwn_grandchild').click(function () {
    $('.dropdown-grandchild').toggleClass('hide');
  });
*/

  //##  Header Shrink On Scroll
  

if ($(window).width() > 1400 ) {

    $('body').scroll(function () {
      if($(this).scrollTop() > 250) {
        if (!$('header.h_desktop').hasClass('shrink')) {
          $('header.h_desktop').stop().addClass('shrink').css('top', '-50px').animate({
            'top': '0px'
          }, 800);
          $('header.h_desktop .search-icon').stop().addClass('position_fix').css('top', '-3.05em').animate({
  
          },50);
        }
      }
      else
      {
        $('header.h_desktop .search-icon').removeClass('position_fix');
        $('header.h_desktop').removeClass('shrink');
        $('header.h_desktop .search-icon').css('top', '');
          
      }
    });
  
  } else if ($(window).width() > 1200 && $(window).width() < 1400) {

    $('body').scroll(function () {
      if($(this).scrollTop() > 250) {
        if (!$('header.h_desktop').hasClass('shrink')) {
          $('header.h_desktop').stop().addClass('shrink').css('top', '-50px').animate({
            'top': '0px'
          }, 800);
          $('header.h_desktop .search-icon').stop().addClass('position_fix').css('top', '1.2em').animate({
  
          },50);
          /**/
        }
      }
      else
      {
        $('header.h_desktop .search-icon').removeClass('position_fix');
        $('header.h_desktop').removeClass('shrink');
        $('header.h_desktop .search-icon').css('top', '');
          
      }
    });



  } else if ($(window).width() > 991 && $(window).width() < 1200) {

    $('body').scroll(function () {
      if($(this).scrollTop() > 250) {
        if (!$('header.h_desktop').hasClass('shrink')) {
          $('header.h_desktop').stop().addClass('shrink').css('top', '-50px').animate({
            'top': '0px'
          }, 800);
          $('header.h_desktop .search-icon').stop().addClass('position_fix').css('top', '1.2em').animate({
  
          },50);
        }
      }
      else
      {
        $('header.h_desktop .search-icon').removeClass('position_fix');
        $('header.h_desktop').removeClass('shrink');
        $('header.h_desktop .search-icon').css('top', '');
          
      }
    });

  
} else if ($(window).width() < 991) {
    $('body').scroll(function () {
      if($(this).scrollTop() > 70) {
        if (!$('header.h_mobile').hasClass('shrink')) {
          $('header.h_mobile').stop().addClass('shrink').css('top', '-50px').animate({
            'top': '0px'
          }, 350);
          $('.h_mobile .searchbox').stop().css('top', '60px');
        }
      }
      else if ($(this).scrollTop() < 70) {
        $('header.h_mobile').removeClass('shrink');
        $('header.h_mobile .searchbox').css('top', '107px');
        $('header.h_mobile').css('top', '');

          
      }
    });
}

  /* ## Do somethig when screen < 960 */
  if ($(window).width() < 992) {
    $('header.h_desktop').remove();
  } else if ($(window).width() > 992) {
    $('header.h_mobile').remove();

  }
  


  
});
// end of document ready


// Values that must check every moment 
function change_values() {
  /* ## Set Current Currency */
  var currSet = getCookie("currency");
  $('#currency_set').text(currSet);
  if (!currSet) {
    setCookie('currency', 'usd');
    $('#currency_set').text('usd');
  }



  /* ## Do somethig when screen < 960 */
  if ($(window).width() < 992 ) {
    $('header.h_desktop').hide();
    $('header.h_mobile').show();
  } else if ($(window).width() > 992) {
    $('header.h_desktop').show();
    $('header.h_mobile').hide();
  }
  


}

change_values();
setInterval(change_values, 100);
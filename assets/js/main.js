

$(document).ready(function () {
    $('.slider-carousel').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }],
      autoplaySpeed: 1500,
      variableWidth: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    (function($) {
      $(function() {
    
        $('.catalog_tabs_button_container').on('click', 'div:not(.active_tab_button)', function() {
          $(this)
          .addClass('active_tab_button').siblings().removeClass('active_tab_button')
          .closest('.block_4').find('div.catalog_container').removeClass('active_catalog').eq($(this).index()).addClass('active_catalog');
        });
      });
    })(jQuery);

    $('li.catalog_item').click('.popup_open', function(){
      let src = $(this).find('img').attr('src');
      $('.popup_image').attr('src', src);
      let header = $(this).find('h6').text();
      $('.popup_name').text(header);
      $('.popup').fadeIn();
      return false;
    });
    $('.close_popup').click(function() {
      $(this).parents('.popup').fadeOut();
      return false;
    });        
    
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup').fadeOut();
      }
    });
    
    $('.popup').click(function(e) {
      if ($(e.target).closest('.container').length == 0) {
        $('.popup').fadeOut();					
      }
    });
  }); 

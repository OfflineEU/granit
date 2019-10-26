$(function () {
  //goods slider
  {
    $('.goods_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="arrow prev-goods"></button>',
            nextArrow: '<button class="arrow next-goods"></button>'
          }
        }
      ]
    });
  }
  //popular slider
  {
    $('.popular_slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="arrow prev-popular"></button>',
            nextArrow: '<button class="arrow next-popular"></button>'
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="arrow prev-popular"></button>',
            nextArrow: '<button class="arrow next-popular"></button>'
          }
        }
      ]
    });
  }
  //stock
  {
    let stockSpan = $('<span class="popular_stock-span">акция</span>'),
      objImg = $('.stock').find('.popular_block_border')

    objImg.find('.popular_img').addClass(('popular_img_stock'))

    objImg.each(() => {
      if (objImg.find('.popular_img').children('.popular_stock-span').length === 0) {
        objImg.find('.popular_img').append(stockSpan)
      }
      objImg.find('p').replaceWith('<p class="popular_stock-price"><span>1500 р./т</span><strong>1350 р./т</strong></p>')
    });
  }
  //response menu
  {
    const responseBtnOn = $('.response_menu_trigger');
    responseBtnOn.on('click', () => {
      $('.response_menu').css('display', 'block');
      $('.header').css('padding-bottom', '1rem');
      responseBtnOn.css('display', 'none');
    });
    const responseBtnOff = $('.response_menu_close');
    responseBtnOff.on('click', () => {
      $('.response_menu').css('display', 'none');
      $('.header').css('padding-bottom', '5rem');
      responseBtnOn.css('display', 'block');
    });
  }
  //modal callback
  {
    $('.header_btn, .main_btn').on('click', () => {
      $('#popup').css('display', 'block');
    });
    $('.popup_close').on('click', () => {
      $('#popup').css('display', 'none');
    });
  }
  //modal prices
  {
    $('.popular_button, .goods_button')
      .on('click', () => {
        $('#popup_prices').css('display', 'block');
      });
    $('.popup_close').on('click', () => {
      $('#popup_prices').css('display', 'none');
    });
  }
  //menu scroll animation
  {
    $(".menu_links").on("click", "a", function (event) {
      event.preventDefault();
      let id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 2000, 'easeInSine');
    });
  }
  //form validation
  {
    const formCallback = $('#popup-form-callback');
    const name = $('#popup-name');
    const phone = $('#popup-phone');

    formCallback.on('submit', (e) => {
      if (name.value === '') {

      }
      if (name.value.length < 3) {
        const span = document.createElement('span');
        span.innerHTML = 'Неверно указано имя пользователя'
        name.insertAdjacentHTML('afterend', '<span>hui</span>');
      }
    });

  }
});



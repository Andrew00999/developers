'use strict';

document.querySelectorAll('.func_element_top').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    if (content.style.maxHeight) {
      document.querySelectorAll('.detail_wrap').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.detail_wrap').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }),
    $('.mobile_card_slider').slick({
      infinite: false
    });
})


let burger = document.querySelector('.burger_menu');

if(burger) {
  const burgerMenu = document.querySelector('.burger_menu_list');
  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock')
  })
}


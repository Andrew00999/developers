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
    slidesToShow: 2
  });
})
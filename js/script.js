
'use strict';

document.querySelectorAll('.func_element').forEach((el) => {
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
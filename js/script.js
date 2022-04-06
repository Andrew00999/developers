'use strict';


// accordion

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


// second slider

$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1320,
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


// burger menu

let burger = document.querySelector('.burger_menu');

if (burger) {
  const burgerMenu = document.querySelector('.burger_menu_list');
  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('_active');
    document.body.classList.toggle('_lock')
  })
}



// form validation

let form = document.querySelector('.form'),
  inputEmail = document.querySelector('.input_email'),
  inputPhone = document.querySelector('.input_phone'),
  inputs = document.querySelectorAll('.input');



function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}


form.onsubmit = function () {
  let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      emptyInputs = Array.from(inputs).filter(input => input.value === '');


  inputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error')
    } else {
      input.classList.remove('error')
    }
  })

  if (emptyInputs.length) {
    return false
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('error')
    return false
  } else {
    inputEmail.classList.remove('error')
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error')
    return false
  } else {
    inputPhone.classList.remove('error')
  }

}


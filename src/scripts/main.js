// -- Fução para digitar automaticamente. -- //
const dev = ['Full Stack Python 🐍', 'Front-end ', 'Back-end ', 'Web '];
const dynamicWorks = document.querySelectorAll('.dynamic-work');

dynamicWorks.forEach(function (dynamicWork) {
  let index = 0;
  let intervalId = null;

  function writeWord() {
    const word = dev[index];
    let i = 0;
    intervalId = setInterval(() => {
      dynamicWork.innerHTML = word.slice(0, i);
      i++;
      if (i > word.length) {
        clearInterval(intervalId);
        index++;
        if (index >= dev.length) {
          index = 0;
        }
        setTimeout(() => {
          writeWord();
        }, 2000);
      }
    }, 100);
  }

  writeWord();
});

//-------------------------------------------------------------------------//


// -- Adiciona uma classe ao clica no card que faz o efeito de flip -- //
const card = document.querySelector('.home__profile__card');

card.addEventListener('click', function () {
  card.classList.toggle('home__profile__card--is-active');
});

//-------------------------------------------------------------------------//


// -- Fução para Definir a cor de fundo e a animação dos icones e Carrossel de imagens -- //

const li = document.querySelectorAll('.tech__description__list__item');

li.forEach((item, index) => {
  item.addEventListener('click', () => {

    let list = document.querySelector('.tech__description__list');
    let bgColor = document.querySelector('.bg-color');
    let itemColor = item.getAttribute('value');
    let itemImg = item.querySelector('img');

    list.style.paddingTop = "0";
    bgColor.style.background = itemColor;
    itemImg.classList.toggle('tech__description__list__item--is-active');

    let src0 = item.getAttribute("data-src0");
    let src1 = item.getAttribute("data-src1");
    let src2 = item.getAttribute("data-src2");
    let src3 = item.getAttribute("data-src3");
    let src4 = item.getAttribute("data-src4");
    let src5 = item.getAttribute("data-src5");
    document.getElementById("slide0").src = src0;
    document.getElementById("slide1").src = src1;
    document.getElementById("slide2").src = src2;
    document.getElementById("slide3").src = src3;
    document.getElementById("slide4").src = src4;
    document.getElementById("slide5").src = src5;
  });
});

// -- Carrousel para seção de personagens -- //

let swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    1600: {
      centeredSlides: true,
      slidesPerView: 2.5,
      spaceBetween: 600,
    },
  },
});


//-------------------------------------------------------------------------//


// jquery //
$(document).ready(function () {
  $('.tech__description__list__item').click(function () {
    $('.carrousel').slideDown('slow');
    $('.tx-start').fadeOut(500);
  });
});


$(document).ready(function () {
  $("li.tech__description__list__item img").click(function () {
    var texto = $(this).parent().data("text");
    $("p.tech__description__text").text(texto).fadeTo(250, 1);
  });
});

//-------------------------------------------------------------------------//

// seleciona todas as imagens dentro dos elementos "work__card"
const images = document.querySelectorAll('.work__card img');

// itera sobre as imagens selecionadas
images.forEach((image) => {
  // adiciona um evento de clique à imagem
  image.addEventListener('click', () => {
    // cria um elemento HTML para exibir a descrição do trabalho
    const description = document.createElement('div');
    description.classList.add('work__desc-overlay');
    description.innerHTML = image.nextElementSibling.innerHTML;
    document.body.appendChild(description);

    // adiciona um evento de clique ao elemento de descrição
    description.addEventListener('click', () => {
      document.body.removeChild(description);
    });
  });
});



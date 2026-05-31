(function ($) {

  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  AOS.init({
    once: true
  });

  // ----------------------------
  // SCROLL TOP
  // ----------------------------
  $(window).on('scroll', function () {

    var scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();

    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }

  });

  // ----------------------------
  // SCROLL TO TOP
  // ----------------------------
  $('.scroll-top-to').on('click', function () {

    $('body,html').animate({
      scrollTop: 0
    }, 500);

    return false;

  });

  $(document).ready(function () {

    // ----------------------------
    // NAVBAR MOBILE
    // ----------------------------
    if ($(window).width() < 992) {

      $('.main-nav .dropdown-toggle').on('click', function () {

        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);

      });

    }

    // -----------------------------
    // TESTIMONIAL SLIDER
    // -----------------------------
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // -----------------------------
    // VIDEO REPLACE
    // -----------------------------
    $('.video-box i').click(function () {

      var video =
        '<iframe class="border-0" allowfullscreen src="' +
        $(this).attr('data-video') +
        '"></iframe>';

      $(this).replaceWith(video);

    });

    // -----------------------------
    // COUNT DOWN
    // -----------------------------
    var syoTimer = $('#simple-timer');

    if (syoTimer) {

      $('#simple-timer').syotimer({
        year: 2023,
        month: 9,
        day: 1,
        hour: 0,
        minute: 0
      });

    }

    // -----------------------------
    // ABOUT SLIDER
    // -----------------------------
    $('.about-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });

    // -----------------------------
    // QUOTE SLIDER
    // -----------------------------
    $('.quote-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });

    // -----------------------------
    // CLIENT SLIDER
    // -----------------------------
    $('.client-slider').slick({
      slidesToShow: 4,
      infinite: true,
      arrows: false,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    });

  });

})(jQuery);

/* =========================================================
   FILTRO CHEFIA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const botoes = document.querySelectorAll(".filtro-btn");
  const areas = document.querySelectorAll(".chefia-area");

  botoes.forEach(botao => {

    botao.addEventListener("click", () => {

      // REMOVE ACTIVE
      botoes.forEach(btn => btn.classList.remove("active"));

      // ADICIONA ACTIVE
      botao.classList.add("active");

      const filtro = botao.getAttribute("data-filter");

      areas.forEach(area => {

        const categoria = area.getAttribute("data-category");
        const header = area.querySelector(".chefia-header");

        // MOSTRAR TODOS
        if (filtro === "all") {

          area.style.display = "block";

          if (header) {
            header.style.display = "block";
          }

        }

        // MOSTRAR CATEGORIA
        else if (categoria === filtro) {

          area.style.display = "block";

          if (header) {

            area.prepend(header);
            header.style.display = "block";

          }

        }

        // ESCONDER
        else {

          area.style.display = "none";

        }

      });

    });

  });

});

/* =========================================================
   FAQ ACCORDION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const faqItems = document.querySelectorAll(".faq-item");

  // REMOVE ACTIVE INICIAL
  faqItems.forEach(item => {
    item.classList.remove("active");
  });

  faqItems.forEach(item => {

    const pergunta = item.querySelector(".faq-question");

    pergunta.addEventListener("click", () => {

      const ativo = item.classList.contains("active");

      // FECHA TODOS
      faqItems.forEach(faq => {
        faq.classList.remove("active");
      });

      // ABRE O ITEM CLICADO
      if (!ativo) {
        item.classList.add("active");
      }

    });

  });

});

/* =========================================================
   MENU ATIVO AUTOMÁTICO
========================================================= */

const currentPage = window.location.pathname
  .split("/")
  .pop();

const navLinks = document.querySelectorAll(
  "#nav-principal .nav-link"
);

navLinks.forEach(link => {

  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }

});

/* =========================================================
   FILTRO ESCOTISTAS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const botoes = document.querySelectorAll(".filtro-btn1");
  const areas = document.querySelectorAll(".chefia-area1");

  // =========================================
  // FUNÇÃO MOSTRAR TODOS AO ENTRAR
  // =========================================

  areas.forEach(area => {
    area.style.display = "block";
  });

  // =========================================
  // EVENTO DOS BOTÕES
  // =========================================

  botoes.forEach(botao => {

    botao.addEventListener("click", () => {

      // REMOVE ACTIVE DE TODOS
      botoes.forEach(btn => {
        btn.classList.remove("active");
      });

      // ADICIONA ACTIVE NO CLICADO
      botao.classList.add("active");

      // PEGA FILTRO
      const filtro = botao.getAttribute("data-filter");

      // =========================================
      // MOSTRAR / ESCONDER ÁREAS
      // =========================================

      areas.forEach(area => {

        const categoria = area.getAttribute("data-category");

        // MOSTRAR TODOS
        if (filtro === "all") {

          area.style.display = "block";

        }

        // MOSTRAR SOMENTE A CATEGORIA
        else if (categoria === filtro) {

          area.style.display = "block";

        }

        // ESCONDER RESTANTE
        else {

          area.style.display = "none";

        }

      });

    });

  });

});


document.addEventListener("DOMContentLoaded", function () {

    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarCollapse");

    toggler.addEventListener("click", function () {

        menu.classList.toggle("show");

        toggler.classList.toggle("active");

        if(menu.classList.contains("show")){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "";
        }

    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        link.addEventListener("click", function(){

            menu.classList.remove("show");

            toggler.classList.remove("active");

            document.body.style.overflow = "";

        });

    });

});


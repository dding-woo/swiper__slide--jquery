

$(function () {


  var swiper = new Swiper(".best__item__contianer", {
    slidesPerView: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'progressbar',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      activeIndexChange: function () {

        console.log(this.realIndex);
        const slide = document.querySelectorAll(".best__slide");


      }
    }
  });
});//지우면안됨


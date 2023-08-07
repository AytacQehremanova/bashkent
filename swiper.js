const bannerSwiper = new Swiper(" .banner-swiper", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const swiperFilial = new Swiper(" .swiper-filial", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:2,
        spaceBetween:60,
      },

      1024:{
        slidesPerView:3,
        spaceBetween:50,
      }
    }
  });


  const swiperPartners = new Swiper(" .swiper-partners", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:3,
        spaceBetween:60,
      },

      1024:{
        slidesPerView:5,
        spaceBetween:50,
      }
    }
  });

  const swiperBlogs = new Swiper(" .swiper-blogs", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      700:{
        slidesPerView:2,
        spaceBetween:60,
      },

      1024:{
        slidesPerView:3,
        spaceBetween:50,
      }
    }
  });

  

const swiperComment = new Swiper(" .swiper-comment", {
    slidesPerView: 1,
    
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
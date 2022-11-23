$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// popup script

let popup = document.getElementById("popup");
let blur = document.getElementById("blur");
function openPopup() {
  popup.classList.add("openPopup");
}

function closePopup() {
  popup.classList.remove("openPopup");
}

function toggle() {
  blur.classList.toggle("active");
}

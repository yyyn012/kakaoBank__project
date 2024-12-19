const blue = document.querySelector(".blue");
const star = document.querySelectorAll(".ico_star");

const moonOriginal = document.querySelector(".moon_original");
const moonShadow = document.querySelector(".moon_shadow");

const on = document.querySelector(".on");
const night = document.querySelector(".night");

const intersectionObserver = new IntersectionObserver(function (entries) {
  // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로 아무것도 하지 않음
  if (entries[0].intersectionRatio <= 0) return;

  // blue.style.height = "0";
  // star.classList.add("on");

  // star.forEach(() => {
  //   for (let i = 0; i < star.children.length; i++) {
  //     star.children[i].classList.add("on");
  //   }
  // });

  moonShadow.classList.add("night");
  moonOriginal.classList.add("night");
});

// 주시 시작

setTimeout(() => {
  intersectionObserver.observe(document.querySelector(".section7"));
}, 2000);

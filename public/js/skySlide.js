const blue = document.querySelector(".blue");
const night = document.querySelector(".night");
const moonOriginal = document.querySelector(".moon_original");
const moonShadow = document.querySelector(".moon_shadow");

const intersectionObserver = new IntersectionObserver(function (entries) {
  // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로 아무것도 하지 않음
  if (entries[0].intersectionRatio <= 0) return;

  blue.style.height = "0";
  nightFunction();
});

function nightFunction() {
  if (moonShadow.classList.contains("night")) {
    moonOriginal.classList.remove("night");
  } else {
    moonShadow.classList.contains("night");
  }
}

// 주시 시작
intersectionObserver.observe(document.querySelector(".section7"));

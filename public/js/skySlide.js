const section7 = document.querySelector(".section7");

const blue = document.querySelector(".blue");
const night = document.querySelector(".night");
const moonOriginal = document.querySelector(".moon_original");
const moonShadow = document.querySelector(".moon_shadow");

const intersectionObserver = new IntersectionObserver(function (entries) {
  // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로 아무것도 하지 않음
  if (entries[0].intersectionRatio <= 0) return;

  blue.style.height = "0";
});

function nightFunction() {
  if ((blue.style.height = "0")) {
    // moonShadow.classList.contains("night");
    // moonOriginal.classList.contains("night");
    console.log("night");
  } else {
    //night상태가 아닐경우 night클래스를 삭제한다.
    // moonShadow.classList.remove("night");
    // moonOriginal.classList.remove("night");
    console.log("afternoon");
  }
}

// 주시 시작

setTimeout(() => {
  intersectionObserver.observe(document.querySelector(".section7"));
}, 2000);

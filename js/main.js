const searchEl = document.querySelector(".search");
// searchEl 안의 input 요소를 찾음
const searchInputEl = searchEl.querySelector("input");

// search 하위 요소를 클릭시 searchInput 요소를 focus하는 클릭이벤트를 추가
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

//focus 상태 이벤트 추가
searchInputEl.addEventListener("focus", function () {
  //search 하위 요소인 input에 focus시 search에 focused라는 class 추가
  searchEl.classList.add("focused");
  //HTML 속성 중 placeholder를 부여하겠다.
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// focus가 해제된 상태의 이벤트를 추가
searchInputEl.addEventListener("blur", function () {
  //focused 클래스  삭제
  searchEl.classList.remove("focused");
  //HTML 속성 중 placeholder를 부여하겠다.
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// 브라우저의 창(보고 있는 창)에 대한 명령을 가지고 있음
//내용이 많을 경우 버벅임 현상이 발생
window.addEventListener(
  "scroll",
  // lodash의 함수
  // 지정한 시간마다 부하를 줘서 scroll이벤트의 과도한 동작을 방지함
  // _.throttle(함수, 시간(ms));
  _.throttle(function () {
    // scrollY의 값이
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to(요소, 지속시간(s), 옵션(객체데이터))
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300),
);

toTopEl.addEventListener("click", function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
// fadeEls를 순차적으로 실행시킬 것이다.
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 0.7초 뒤에 투명도를 1로 만들어라
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  // 슬라이드 방향 : 세로
  direction: "vertical",
  // 자동 슬라이더 설정
  autoplay: true,
  // 반복 설정
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //5초에 한 번씩 실행
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자,
    clickable: true, //사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev", //이전 슬라이드 보는 버튼
    nextEl: ".promotion .swiper-next", //다음 슬라이드 보는 버튼
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add("hide"); //promotionEl 에 클래스 hide 추가
  } else {
    //보임 처리
    promotionEl.classList.remove("hide"); //promotionEl 에 클래스 hide 삭제
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size, //y축에서 얼만큼 움직일 것인가
      repeat: -1, //무한반복
      yoyo: true, //재생된 애니메이션을 리플레이함
      ease: "power1.inOut", //애니메이션의 움직임
      delay: random(0, delay), //애니메이션 재생 지연시간
    },
  ); //gsap.to(요소, 시간, 옵션)
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy"); //section의 scroll-spy class를 찾음
spyEls.forEach(function (spyEl) {
  //특정영역이 보이는지 감시.특정클래스를 제어.scrollMagic의 컨트롤러
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소
    triggerHook: 0.8, //요소가 어떤 뷰포트의 높이에서 걸릴 것 인지 설정
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller()); //실제로 동작
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

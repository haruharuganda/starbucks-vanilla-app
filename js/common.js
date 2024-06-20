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

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();

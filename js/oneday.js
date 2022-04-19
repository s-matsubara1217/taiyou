/*-------------------------------
  資格取得制度 swiper
-------------------------------*/
const qualification_swiper = new Swiper(".qualification__container", {
  spaceBetween: 44,
  // ページネーション
  pagination: {
    el: ".qualification-pagination",
    type: "progressbar",
    // clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".qualification-button-next",
    prevEl: ".qualification-button-prev",
  },
  breakpoints: {
		834: {
		  spaceBetween: 20,
		}
	}
});

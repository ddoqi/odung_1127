import { authService } from "./firebase.js";
import { handleLocation, route } from "./router.js";
import { openModal, closeModal, dropdown, showMenu } from "./modal.js";
import { pu_openModal, pu_closeModal} from "./profile_update.js";
// import { swiper } from "./keyword.js";

// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", () => {
  // 로그인 상태 모니터링
  authService.onAuthStateChanged((user) => {
    // Firebase 연결되면 화면 표시
    // user === authService.currentUser 와 같은 값
    handleLocation();
    if (user) {
      // 로그인 상태인 경우
    } else {
      // 로그아웃 상태인 경우
    }
  });
});

// 전역 함수 리스트
window.route = route;
window.openModal = openModal;
window.closeModal = closeModal;
window.dropdown = dropdown;
window.showMenu = showMenu;
window.pu_openModal = pu_openModal;
window.pu_closeModal = pu_closeModal;
// window.swiper = swiper;

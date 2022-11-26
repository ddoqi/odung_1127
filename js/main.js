import { authService } from "./firebase.js";
import { handleLocation, route } from "./router.js";
import { openModal, closeModal, dropdown, showMenu, modaldropdown, modalshowMenu } from "./modal.js";
import { pu_openModal, pu_closeModal} from "./profile_update.js";
// import { swiper } from "./keyword.js";

//다경 백엔드 연결
import { socialLogin } from "./pageJs/login.js";
import {
  moveJoinPage,
  loginAction,
  joinAction,
  logoutAction,
} from "./pageJs/login.js";
import {
  changeProfile,
  onFileChange,
  DeletePhoto,
} from "./pageJs/profile.js";


// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", () => {
  // 로그인 상태 모니터링
  authService.onAuthStateChanged((user) => {
    // Firebase 연결되면 화면 표시
    // user === authService.currentUser 와 같은 값

    //다경 백엔드 추가한것!!
    handleLocation();
    const hash = window.location.hash;
    if (user) {
      if (hash === "") {
  
        window.location.replace("#main");
      }
      window.location.replace("#main");
    }
    // user가 아니라면 router.js에서 설정한 고대로 가니까 user가 아닌 사람은 login페이지밖에 못만난다.
    else {
      if (hash !== "") {
        window.location.replace("");
      }
    }
  });
});

// 전역 함수 리스트
window.route = route;
window.openModal = openModal;
window.closeModal = closeModal;
window.dropdown = dropdown;
window.modaldropdown = modaldropdown;
window.showMenu = showMenu;
window.pu_openModal = pu_openModal;
window.pu_closeModal = pu_closeModal;
window.modalshowMenu = modalshowMenu;
// window.swiper = swiper;

//다경 백엔드 연결
window.socialLogin=socialLogin;
window.loginAction=loginAction;
window.moveJoinPage=moveJoinPage;
window.joinAction=joinAction;
window.logoutAction=logoutAction;
window.changeProfile=changeProfile;
window.onFileChange=onFileChange;
window.DeletePhoto=DeletePhoto;

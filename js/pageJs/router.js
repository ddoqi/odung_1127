export const route = (event) => {
  event.preventDefault();
  console.log("event.target.hash:", event.target.hash);
  window.location.hash = event.target.hash;
};

const routes = {
  "/": "/page/keyword.html",
  login: "/page/login.html",
  join: "/page/join.html",
  main: "/page/main.html",
  mypage: "/page/mypage.html",
  comment: "/page/comment.html",
  404: "/page/404.html",
};

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", ""); // ""

  // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
  if (path.length == 0) {
    path = "/";
  }
  const route = routes[path] || routes[404]; // truthy 하면 route[path], falsy 하면 routes[404]

  const html = await fetch(route).then((data) => data.text());

  document.getElementById("main-page").innerHTML = html;

  if (path === "/") {
    const swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
};

// path 경로에 따라 <head> <title> 해당 페이지에 맞게 변경되게끔 하기 </title></head>

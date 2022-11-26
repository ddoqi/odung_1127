export const route = (event) => {
  event.preventDefault();
  console.log("event.target.hash:", event.target.hash);
  window.location.hash = event.target.hash;
};

const routes = {
  "/": "/page/keyword.html",
  header: "/page/header.html",
  sidebar: "/page/sidebar.html",
  login: "/page/login.html",
  join: "/page/join.html",
  main: "/page/main.html",
  mypage: "/page/mypage.html",
  comment: "/page/comment.html",
  footer: "/page/footer.html",
  404: "/page/404.html",
};

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", ""); // #login 을 login 으로 저장  path = login 상태

  // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
  if (path.length == 0) {
    path = "/";
  }

  const route = routes[path] || routes[404]; // truthy 하면 route[path], falsy 하면 routes[404]

  if (path === "login" || path === "join" || path === "/") {
    const pagehtml = await fetch(route).then((data) => data.text());
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_header").innerHTML = " ";
    document.getElementById("index_sidebar").innerHTML = " ";
    document.getElementById("index_footer").innerHTML = " ";

  }
  // main page 접속할 때
  if (path === "main"){
    const yheader = routes["header"] || routes[404];
    const ysidebar = routes["sidebar"] || routes[404];
    const yfooter = routes["footer"] || routes[404];


    const headerhtml = await fetch(yheader).then((data) => data.text());
    const sidebarhtml = await fetch(ysidebar).then((data) => data.text());
    const footerhtml = await fetch(yfooter).then((data) => data.text());

    const pagehtml = await fetch(route).then((data) => data.text());

    document.getElementById("index_header").innerHTML = headerhtml;
    document.getElementById("index_sidebar").innerHTML = sidebarhtml;
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_footer").innerHTML = footerhtml;

  }

  if (path === "mypage" || path === "comment"){
    const yfooter = routes["footer"] || routes[404];
    const yheader = routes["header"] || routes[404];


    const headerhtml = await fetch(yheader).then((data) => data.text());
    const pagehtml = await fetch(route).then((data) => data.text());
    const footerhtml = await fetch(yfooter).then((data) => data.text());


    document.getElementById("index_header").innerHTML = headerhtml;
    document.getElementById("index_sidebar").innerHTML = " ";
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_footer").innerHTML = footerhtml;

  }


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


if (path === "mypage" || path === "main" || path == "comment") {
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
};
};

// if ( || path === "comment" || path === "main"){
//   const swiper = new Swiper(".mySwiperhead", {
//     direction: "vertical",
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//   });
// };
// path 경로에 따라 <head> <title> 해당 페이지에 맞게 변경되게끔 하기 </title></head>

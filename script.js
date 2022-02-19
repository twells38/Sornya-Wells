
/*AOS.init({
  easing: "ease",
  duration: 1800,
  once: true
}); */
 




window.addEventListener("DOMContentLoaded", function() {
  // appear menu after click on hamburger icon
  const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul ");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });

  //appear navbar darker when scroll down.
  const header = document.querySelector("#header .header");
  window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };
  const menu_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
  );
  menu_item.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });
  });
});
//link < a > tag after click on menu it

//show time




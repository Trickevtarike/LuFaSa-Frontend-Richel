window.onload = function () {
  document.getElementById("hamburger").onclick = function () {
    toggle();
  };
};

function toggle() {
  document.getElementById("hamburger").classList.toggle("navBuCoIn");
  document.getElementById("content-container").classList.toggle("navBuCoIn");
  document.getElementById("nav").classList.toggle("navNavbarIn");
  getNavInView();
}

function getNavInView() {
  var kontakt = document.getElementById("kontakt");
  var rect = kontakt.getBoundingClientRect();
  if (
    !(
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    )
  ) {
    kontakt.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
}





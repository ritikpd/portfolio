<<<<<<< HEAD
const section = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*='+id+']").classList.add("active");
      });
    }
  });
};
=======
const section = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*='+id+']").classList.add("active");
      });
    }
  });
};
>>>>>>> cf0869a02baee5d96a22d1127e9ab9355003bbc4

function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
}

// gọi form
loadComponent("contact", "./components/contact.html");
// gọi about
loadComponent("about", "./components/about.html");
// gọi service
loadComponent("service", "./components/service.html");
// gọi projects
loadComponent("projects", "./components/projects.html");

// search..

const searchBox = document.querySelector(".search-container");
const btn = document.getElementById("searchBtn");

// click mở / search
btn.addEventListener("click", () => {
  if (!searchBox.classList.contains("active")) {
    searchBox.classList.add("active");
    searchBox.querySelector("input").focus();
  } else {
    const keyword = searchBox.querySelector("input").value;
    console.log("Search:", keyword);
  }
});

// click ngoài -> đóng
document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});

// search.........................

//Header đổi màu khi scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
//  ...............

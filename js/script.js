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
// gọi service
loadComponent("projects", "./components/projects.html");

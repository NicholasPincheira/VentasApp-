let deferredPrompt; // Variable para almacenar el evento `beforeinstallprompt`

// Escucha el evento `beforeinstallprompt` y guarda el evento para mostrarlo más tarde
window.addEventListener("beforeinstallprompt", (e) => {
  // Previene la instalación automática
  e.preventDefault();
  console.log("beforeinstallprompt fired");
  deferredPrompt = e;

  const installBtn = document.getElementById("installBtn");
  installBtn.style.display = "block"; // Muestra el botón

  // Agrega el evento de clic al botón de instalación
  installBtn.addEventListener("click", () => {
    // Oculta el botón de instalación
    installBtn.style.display = "none";
    // Llama al prompt de instalación
    deferredPrompt.prompt();

    // Espera la respuesta del usuario
    deferredPrompt.userChoice.then((choiceResult) => {
      console.log(choiceResult.outcome); // Resultado de la instalación
      deferredPrompt = null; // Limpia el evento después de que se haya utilizado
    });
  });
});

// Escucha si la aplicación ha sido instalada
window.addEventListener("appinstalled", () => {
  console.log("Aplicación instalada");
});

document.addEventListener("DOMContentLoaded", function (event) {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/static/js/serviceworker.js")
      .then((registration) => {
        console.log("Service Worker registrado:", registration);
      })
      .catch((error) => {
        console.log("Error al registrar el Service Worker:", error);
      });
  }

  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

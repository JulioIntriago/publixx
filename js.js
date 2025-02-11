// Array que contiene los testimonios
const testimonials = [
  {
    text: "Highly recommend! Best staff ever! Trust them with your claim, they will make sure you get a fair payout from your insurance!",
    author: "KAY CULVER",
    stars: 5, // Cantidad de estrellas
  },
  {
    text: "Amazing experience! The team was professional and thorough, they handled everything and got my claim paid faster than expected.",
    author: "MONICA AILEA",
    stars: 5, // Cantidad de estrellas
  },
];

let currentTestimonial = 0; // Índice del testimonio actual

// Función para cambiar el testimonio
function changeTestimonial(index) {
  if (!testimonials.length) return; // Evita errores si el array está vacío

  if (index === -1) {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  } else if (index === 1) {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  } else {
    currentTestimonial = index;
  }

  const testimonial = testimonials[currentTestimonial];

  // Verifica que los elementos existen antes de actualizarlos
  const textElement = document.getElementById("testimonial-text");
  const authorElement = document.getElementById("testimonial-author");
  const starsContainer = document.getElementById("testimonial-stars");

  if (textElement && authorElement && starsContainer) {
    textElement.textContent = testimonial.text;
    authorElement.textContent = testimonial.author;

    // Actualiza estrellas de manera optimizada
    starsContainer.innerHTML = '<i class="fa fa-star text-warning"></i>'.repeat(testimonial.stars);
  }

  // Marca el perfil activo
  const profiles = document.querySelectorAll(".profile-img");
  profiles.forEach((profile, idx) => {
    profile.classList.toggle("active", idx === currentTestimonial);
  });
}

// Esperar a que el DOM cargue antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', () => {
  // ✅ Navbar: Ocultar logo cuando el menú hamburguesa se expande
  const navbarToggler = document.querySelector('.navbar-toggler');
  const logo = document.getElementById('logo');

  if (navbarToggler && logo) {
    navbarToggler.addEventListener('click', () => {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      logo.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // ✅ Efecto de zoom en testimonios al pasar el mouse
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  testimonialItems.forEach((item) => {
    item.addEventListener("mouseenter", () => item.style.transform = "scale(1.02)");
    item.addEventListener("mouseleave", () => item.style.transform = "scale(1)");
  });
});

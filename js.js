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
  if (index === -1) {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  } else if (index === 1) {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  } else {
    currentTestimonial = index;
  }

  const testimonial = testimonials[currentTestimonial];
  
  // Actualiza el texto, autor y estrellas dinámicamente
  document.getElementById("testimonial-text").textContent = testimonial.text;
  document.getElementById("testimonial-author").textContent = testimonial.author;

  const starsContainer = document.getElementById("testimonial-stars");
  starsContainer.innerHTML = ""; // Limpia las estrellas actuales
  for (let i = 0; i < testimonial.stars; i++) {
    const star = document.createElement("i");
    star.className = "fa fa-star text-warning";
    starsContainer.appendChild(star);
  }

  // Marca el perfil activo
  const profiles = document.querySelectorAll(".profile-img");
  profiles.forEach((profile, idx) => {
    profile.classList.toggle("active", idx === currentTestimonial);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const logo = document.getElementById('logo');

  navbarToggler.addEventListener('click', () => {
    if (navbarToggler.getAttribute('aria-expanded') === 'true') {
      logo.style.display = 'none'; // Oculta el logo
    } else {
      logo.style.display = 'block'; // Muestra el logo
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  testimonialItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.02)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });
});

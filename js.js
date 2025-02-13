document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      text: "Highly recommend! Best staff ever! Trust them with your claim, they will make sure you get a fair payout from your insurance!",
      author: "KAY CULVER",
      stars: 5,
    },
    {
      text: "Amazing experience! The team was professional and thorough, they handled everything and got my claim paid faster than expected.",
      author: "MONICA AILEA",
      stars: 5,
    },
  ];

  let currentTestimonial = 0;

  function updateTestimonial() {
    const textElement = document.getElementById("testimonial-text");
    const authorElement = document.getElementById("testimonial-author");
    const starsContainer = document.getElementById("testimonial-stars");

    if (textElement && authorElement && starsContainer) {
      const testimonial = testimonials[currentTestimonial];

      textElement.textContent = testimonial.text;
      authorElement.textContent = testimonial.author;

      starsContainer.innerHTML = "⭐".repeat(testimonial.stars);
    }
  }

  window.changeTestimonial = function (direction) {
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    updateTestimonial();
  };

  updateTestimonial(); // Inicializar con el primer testimonio
});

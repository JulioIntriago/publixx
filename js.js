// Lista de testimonios
const testimonials = [
    {
      text: "Highly recommend! Best staff ever! Trust them with your claim, they will make sure you get a fair payout from your insurance!",
      author: "KAY CULVER",
      img: "img/profile1.jpg",
    },
    {
      text: "Amazing experience! The team was professional and thorough, they handled everything and got my claim paid faster than expected.",
      author: "MONICA AILEA",
      img: "img/profile2.jpg",
    },
  ];
  
  let currentTestimonial = 0;
  
  // Cambiar testimonio
  function changeTestimonial(index) {
    // Actualizar el índice del testimonio actual
    if (index === -1) {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    } else if (index === 1) {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    } else {
      currentTestimonial = index;
    }
  
    // Actualizar contenido del testimonio
    document.getElementById("testimonialText").innerText = testimonials[currentTestimonial].text;
    document.getElementById("testimonialAuthor").innerText = testimonials[currentTestimonial].author;
  
    // Actualizar estado activo de las imágenes
    const profileImages = document.querySelectorAll(".profile-img");
    profileImages.forEach((img, idx) => {
      img.classList.toggle("active", idx === currentTestimonial);
    });
  }
  
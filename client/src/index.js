

// register plugin
gsap.registerPlugin(SplitType, ScrollTrigger);

// navbar
document.getElementById('nav-button').addEventListener('click', function() {
  const navbar = document.getElementById('navbar-hamburger');
  
  if (navbar?.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
    navbar.classList.add('flex');
  } else {
    navbar.classList.remove('flex');
    navbar.classList.add('hidden');
  }
 
});

// carousel auto play

document.addEventListener('DOMContentLoaded', function() {
 
    const carouselContainer = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-item');
  
  if (carouselContainer && slides.length > 0) {
   let currentSlide = 0;
  const totalSlides = slides.length;


  const showSlide = (index) => {
    const offset = -index * 100; // Calculate the offset for the slide
    carouselContainer.style.transform = `translateX(${offset}%)`;
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  };

  showSlide(currentSlide); // Initialize with the first slide
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
}
});

// text animation

document.addEventListener('DOMContentLoaded', () => {
  // Define the elements to animate
  const splitTextClasses = [".split-1", ".split-2", ".split-3", ".split-4", ".split-5", ".split-6", ".split-7"];

  splitTextClasses.forEach((splitClass) => {
    // Initialize SplitType for each class
    const mySplitText = new SplitType(splitClass, { type: "chars" });
    const chars = mySplitText.chars;

    // Intersection Observer options
    const observerOptions = {
      threshold: 0.5 // Adjust the threshold as needed
    };

    // Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger GSAP animation on the characters when they are in view
          gsap.fromTo(chars, {
            xPercent: -100,
            opacity: 0,
          }, {
            xPercent: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            duration: 0.3,
          });
          // Optional: unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe each text section
    document.querySelectorAll(splitClass).forEach((element) => {
      observer.observe(element);
    });
  });
});

// navbar hidden in video section

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const videoSection = document.getElementById('video-section');

  if (videoSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.style.display = 'none'; // Hide navbar
      } else {
        navbar.style.display = 'block'; // Show navbar
      }
    });
  }, { threshold: 0.5 }); // Adjust threshold as needed

  observer.observe(videoSection);
}
});

        // <!--form script start-->
        
            document
                .getElementById("wedding-form")
                .addEventListener("submit", function (event) {
                    event.preventDefault(); // prevent default form submission
                    // gather form data
                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email").value;
                    const phone = document.getElementById("phone").value;
                    const guestCount =
                        document.getElementById("guest-count").value;
                    const details = document.getElementById("details").value;
                    const location = document.getElementById("location").value;
                    const dates = document.getElementById("dates").value;
                    const services = Array.from(
                        document.querySelectorAll(
                            'input[name="services"]:checked'
                        )
                    )
                        .map((input) => input.value)
                        .join(", ");

                    // Construct WhatsApp message
                    const message = `
            Hello! I would like to inquire about wedding services.
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Guest Count: ${guestCount}
            Details: ${details}
            Location: ${location}
            Dates: ${dates}
            Services: ${services}
        `;

                //    const mailtoLink = `mailto:Hello@colorsofhappiness.com?subject=Wedding Inquiry&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AEstimated Guest Count: ${guestCount}%0D%0ADetails: ${details}%0D%0ALocation: ${location}%0D%0AEvent Dates: ${dates}%0D%0AServices: ${services}`;
                    // WhatsApp number
                    const whatsappURL = `https://wa.me/919745713419?text=${encodeURIComponent(
                        message
                    )}`;
                    // window.open(mailtoLink, "_blank"); (need to corect with node.js for automatic service)
                    window.open(whatsappURL, "_blank");
                });
        
        // <!--form script end-->
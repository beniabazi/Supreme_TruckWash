document.addEventListener("DOMContentLoaded", function () {
    console.log("Supreme Truckwash Website Loaded");

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        document.querySelector(".slides").style.transform = `translateX(-${slideIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function changeSlide(n) {
        showSlide(slideIndex + n);
    }

    function goToSlide(n) {
        showSlide(n);
    }

    function autoSlide() {
        changeSlide(1);
    }

    // Auto-slide every 5 seconds
    let slideInterval = setInterval(autoSlide, 5000);

    document.querySelector(".prev").addEventListener("click", function () {
        changeSlide(-1);
        resetAutoSlide();
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeSlide(1);
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(autoSlide, 5000);
    }

    showSlide(slideIndex);
});
// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});


// Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Basic Form Validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for your message! We'll get back to you soon.");
        contactForm.reset();
    });
});

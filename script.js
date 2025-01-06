document.addEventListener('DOMContentLoaded', () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    const handleContactForm = () => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    const handleEmailLink = () => {
        const emailLink = document.querySelector('.email-link');
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const emailAddress = 'your.email@example.com'; // Replace with your actual email
            const subject = 'Inquiry from Portfolio';
            const body = 'Hello Babalola T,\n\nI visited your portfolio and would like to connect with you regarding...';
            window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    navSlide();
    handleContactForm();
    handleEmailLink();
});


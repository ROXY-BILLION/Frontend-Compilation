/*============================================================================
  AI ENTREPRENEUR - INTERACTIVE ENGINE (script.js)
============================================================================*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE NAVBAR INTERACTION
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Toggle menu icon between bars and close X
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close mobile menu smoothly when clicking on any link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 2. INTERACTIVE FAQ ACCORDION
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // Setup styles for clean CSS transitions via JS
            question.style.cursor = 'pointer';
            answer.style.maxHeight = '0px';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease';
            answer.style.opacity = '0';

            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                
                // Close all other opened FAQs for a true accordion feel
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('open');
                    const otherAnswer = otherItem.querySelector('p');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0px';
                        otherAnswer.style.opacity = '0';
                        otherAnswer.style.marginTop = '0px';
                    }
                });

                // Toggle target item
                if (!isOpen) {
                    item.classList.add('open');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = '1';
                    answer.style.marginTop = '12px';
                }
            });
        }
    });

    // 3. SECURE FORM CLIENT-SIDE INTERCEPTOR
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Aesthetic visual feedback
            submitBtn.textContent = 'Analyzing Stack & Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            setTimeout(() => {
                alert('Success! Your business system context has been submitted. Our automation architects will contact you within 24 business hours.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 1500);
        });
    }
});
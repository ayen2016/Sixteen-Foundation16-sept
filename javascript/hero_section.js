

document.addEventListener('DOMContentLoaded', function() {
            // Get all slides and navigation elements
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.array-prev');
            const nextBtn = document.querySelector('.array-next');
            const indicators = document.querySelectorAll('.indicator');
            
            // Current slide index
            let currentSlide = 0;
            
            // Function to show a specific slide
            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                
                // Remove active class from all indicators
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                // Show the current slide
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                
                // Update current slide index
                currentSlide = index;
            }
            
            // Function to go to the next slide
            function nextSlide() {
                const nextIndex = (currentSlide + 1) % slides.length;
                showSlide(nextIndex);
            }
            
            // Function to go to the previous slide
            function prevSlide() {
                const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prevIndex);
            }
            
            // Event listeners for navigation buttons
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Event listeners for indicators
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Autoplay functionality
            let autoplayInterval = setInterval(nextSlide, 5000);
            
            // Pause autoplay on hover
            const heroSection = document.querySelector('.hero-section-1');
            heroSection.addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });
            
            // Resume autoplay when not hovering
            heroSection.addEventListener('mouseleave', () => {
                autoplayInterval = setInterval(nextSlide, 5000);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
        });
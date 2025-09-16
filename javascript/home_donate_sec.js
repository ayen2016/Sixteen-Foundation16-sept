  // Animate progress bars when they come into view
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.home_donate_sec_progress-value');
            
            // Function to check if an element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Function to animate progress bars
            function animateProgressBars() {
                progressBars.forEach(bar => {
                    if (isInViewport(bar) && !bar.classList.contains('animated')) {
                        const percent = bar.getAttribute('data-percent');
                        bar.style.width = percent + '%';
                        bar.classList.add('animated');
                    }
                });
            }
            
            // Initial check
            animateProgressBars();
            
            // Check on scroll
            window.addEventListener('scroll', animateProgressBars);
            
            // Check on resize
            window.addEventListener('resize', animateProgressBars);
        });
  // Mobile menu functionality
        const mobileToggle = document.querySelector('.mobile-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileClose = document.querySelector('.mobile-close');
        const backdrop = document.querySelector('.backdrop');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        // Open mobile menu
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        }

        mobileClose.addEventListener('click', closeMobileMenu);
        backdrop.addEventListener('click', closeMobileMenu);

        // Toggle dropdowns in mobile menu
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const parent = e.target.parentElement;
                const dropdown = parent.querySelector('.mobile-dropdown');
                
                if (dropdown) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other dropdowns
                    document.querySelectorAll('.mobile-dropdown').forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });
                }
            });
        });

        // Donate button functionality
        const donateBtns = document.querySelectorAll('.donate-btn, .mobile-donate-btn');
        donateBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Donate button clicked! Redirect to donation page...');
            });
        });
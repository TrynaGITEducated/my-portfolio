document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Create overlay for mobile menu
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    // Mobile Menu Toggle
    function toggleMenu() {
        navbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
    }

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', toggleMenu);
        
        // Close menu when clicking overlay
        overlay.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    }
    
    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects to navigation
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active state
    handleScroll();

    // Typing Animation (your existing code)
    if (typeof Typed !== 'undefined') {
        new Typed("#typing-text", {
            strings: ["Web Development", "UI/UX Design", "ML/AI", "Mobile Development", "IoT","Cloud Computing"],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }
    
    // Preloader (your existing code)
    window.addEventListener('load', function() {
        const loaderContainer = document.querySelector('.loader-container');
        setTimeout(() => {
            loaderContainer.classList.add('fade-out');
            setTimeout(() => {
                loaderContainer.style.display = 'none';
            }, 500);
        }, 1000);
    });
});
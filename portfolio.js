
// Dark Mode Toggle Functionality
class DarkModeToggle {
    constructor() {
        this.darkModeBtn = document.getElementById('darkModeBtn');
        this.body = document.body;
        this.isDarkMode = this.loadDarkModePreference();
        
        this.init();
    }
    
    init() {
        // Set initial mode
        this.setMode(this.isDarkMode);
        
        // Add event listener
        this.darkModeBtn.addEventListener('click', () => {
            this.toggleMode();
        });
        
        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.hasUserPreference()) {
                this.setMode(e.matches);
            }
        });
    }
    
    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        this.setMode(this.isDarkMode);
        this.saveDarkModePreference(this.isDarkMode);
    }
    
    setMode(isDark) {
        this.isDarkMode = isDark;
        if (isDark) {
            this.body.classList.add('dark-mode');
        } else {
            this.body.classList.remove('dark-mode');
        }
        
        // Update button aria-label for accessibility
        this.darkModeBtn.setAttribute('aria-label', 
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
        );
    }
    
    loadDarkModePreference() {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) {
            return saved === 'true';
        }
        // Default to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    saveDarkModePreference(isDark) {
        localStorage.setItem('darkMode', isDark.toString());
    }
    
    hasUserPreference() {
        return localStorage.getItem('darkMode') !== null;
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling to all links with href starting with #
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Scroll to top when clicking the scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const nextSection = document.querySelector('#projects');
                if (nextSection) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
}

// Scroll Reveal Animation
class ScrollReveal {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing this element
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        
        // Observe all elements that should be revealed
        this.observeElements();
    }
    
    observeElements() {
        const elements = document.querySelectorAll('.project-card, .hero-content, .section-title');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            this.observer.observe(el);
        });
    }
}

// Parallax Effect for Hero Section
class ParallaxEffect {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-particles');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Typing Animation for Hero Title
class TypingAnimation {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.init();
    }
    
    init() {
        this.element.textContent = '';
        this.type();
    }
    
    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Project Cards Animation
class ProjectCards {
    constructor() {
        this.init();
    }
    
    init() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Add hover effect for project links
            const links = card.querySelectorAll('.project-links a');
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    link.style.transform = 'translateY(-2px)';
                });
                
                link.addEventListener('mouseleave', () => {
                    link.style.transform = 'translateY(0)';
                });
            });
        });
    }
}

// Accessibility Enhancements
class AccessibilityEnhancements {
    constructor() {
        this.init();
    }
    
    init() {
        // Add focus management for keyboard navigation
        this.setupFocusManagement();
        
        // Add skip link for screen readers
        this.addSkipLink();
        
        // Enhance button accessibility
        this.enhanceButtonAccessibility();
    }
    
    setupFocusManagement() {
        // Add visible focus indicators
        const focusableElements = document.querySelectorAll('a, button, [tabindex]');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid var(--accent-blue)';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = 'none';
            });
        });
    }
    
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-blue);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    enhanceButtonAccessibility() {
        const buttons = document.querySelectorAll('button, .btn');
        buttons.forEach(button => {
            if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
                button.setAttribute('aria-label', 'Button');
            }
        });
    }
}

// Performance Optimization
class PerformanceOptimization {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Debounce scroll events
        this.debounceScrollEvents();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    debounceScrollEvents() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            // Update any scroll-based effects here
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    new DarkModeToggle();
    new SmoothScroll();
    new ScrollReveal();
    new ParallaxEffect();
    new ProjectCards();
    
    // Accessibility and performance
    new AccessibilityEnhancements();
    new PerformanceOptimization();
    
    // Optional: Typing animation for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing animation
        // new TypingAnimation(heroTitle, originalText, 50);
    }
    
    console.log('Portfolio website initialized successfully!');
});

// Add CSS for revealed elements
const revealedCSS = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

const style = document.createElement('style');
style.textContent = revealedCSS;
document.head.appendChild(style);

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DarkModeToggle,
        SmoothScroll,
        ScrollReveal,
        ParallaxEffect,
        TypingAnimation,
        ProjectCards,
        AccessibilityEnhancements,
        PerformanceOptimization
    };
}

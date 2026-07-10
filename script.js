// 1. Production Level Loading Sequence Timeout
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
    }
});

// 2. High-Performance Mobile Interaction Layout Handling
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isOpened);
        navLinks.classList.toggle('active');
    });

    // Close mobile sidebars cleanly when anchors click
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        });
    });
}

// 3. Automated Typing Engine Architecture
const textLibrary = ["Web Developer & Software Builder", "AI Exploration enthusiast."];
let libraryIndex = 0;
let characterIndex = 0;
let isErasing = false;
const typeSpeedValue = 75;
const eraseSpeedValue = 35;
const pauseThreshold = 2500;
const typingTextElement = document.getElementById('typing-text');

function runTypingEngine() {
    if (!typingTextElement) return;
    
    const operationalString = textLibrary[libraryIndex];
    
    if (!isErasing) {
        typingTextElement.textContent = operationalString.substring(0, characterIndex + 1);
        characterIndex++;
        
        if (characterIndex === operationalString.length) {
            isErasing = true;
            setTimeout(runTypingEngine, pauseThreshold);
        } else {
            setTimeout(runTypingEngine, typeSpeedValue);
        }
    } else {
        typingTextElement.textContent = operationalString.substring(0, characterIndex - 1);
        characterIndex--;
        
        if (characterIndex === 0) {
            isErasing = false;
            libraryIndex = (libraryIndex + 1) % textLibrary.length;
            setTimeout(runTypingEngine, 400);
        } else {
            setTimeout(runTypingEngine, eraseSpeedValue);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingTextElement) setTimeout(runTypingEngine, 800);
});

// 4. Clean Performance Intersection Listeners for Sections
const sectionsList = document.querySelectorAll('.section-offset, .hero');
const navigationalElements = document.querySelectorAll('.nav-item');

const intersectionConfiguration = {
    threshold: 0.2,
    rootMargin: "-10% 0px -40% 0px"
};

const internalSiteObserver = new IntersectionObserver((observedEntries) => {
    observedEntries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            navigationalElements.forEach(item => {
                const targetsId = item.getAttribute('href').slice(1);
                if (targetsId === entry.target.id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
}, intersectionConfiguration);

sectionsList.forEach(sectionUnit => {
    internalSiteObserver.observe(sectionUnit);
});

// 5. Scroll-To-Top Logic Execution
const scrollTopButtonElement = document.getElementById("scrollTopBtn");

window.addEventListener('scroll', () => {
    if (scrollTopButtonElement) {
        if (window.scrollY > 500) {
            scrollTopButtonElement.style.display = "block";
        } else {
            scrollTopButtonElement.style.display = "none";
        }
    }
});

if (scrollTopButtonElement) {
    scrollTopButtonElement.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
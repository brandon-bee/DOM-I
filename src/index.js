const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Creating selectors
const navLinks = document.querySelectorAll('nav a');
const navLink1 = document.querySelector('nav a:nth-of-type(1)');
const navLink2 = navLink1.nextElementSibling;
const navLink3 = navLink2.nextElementSibling;
const navLink4 = navLink3.nextElementSibling;
const navLink5 = navLink4.nextElementSibling;
const navLink6 = navLink5.nextElementSibling;
const logoImg = document.querySelector('#logo-img');
const ctaText = document.querySelector('h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');

const midImg = document.querySelector('#middle-img');

const footerLink = document.querySelector('footer a');

//  Add text contents
navLink1.textContent = siteContent.nav["nav-item-1"];
navLink2.textContent = siteContent.nav["nav-item-2"];
navLink3.textContent = siteContent.nav["nav-item-3"];
navLink4.textContent = siteContent.nav["nav-item-4"];
navLink5.textContent = siteContent.nav["nav-item-5"];
navLink6.textContent = siteContent.nav["nav-item-6"];

footerLink.textContent = siteContent.footer.copyright;

// Add class names
footerLink.classList.add('bold');
navLinks.forEach(link => link.classList.add('italic'));

// Add image sources
logoImg.src = siteContent.images['logo-img'];
ctaImg.src = siteContent.images['cta-img'];
midImg.src = siteContent.images['accent-img'];
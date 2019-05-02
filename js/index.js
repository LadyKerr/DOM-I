const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Items
const navItem = document.querySelectorAll('a');
console.log(navItem);
navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];

navItem.forEach(nav => {
nav.style.color = 'green';
});

const navShop = document.createElement('a');
navShop.textContent = 'Shop';
navShop.style.color = 'green';

const navLogin = document.createElement('a');
navLogin.textContent = 'Login';
navLogin.style.color = 'green';

const nav = document.querySelector('nav');
console.log(nav);
nav.appendChild(navShop);
nav.prepend(navLogin);
console.log(navShop);
console.log(navLogin);


//Top Area Text & Image
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

//Middle Area Texts & Image
const textHeading = document.querySelectorAll('.text-content h4');
console.log(textHeading);
textHeading[0].textContent = siteContent['main-content']['features-h4'];
textHeading[1].textContent = siteContent['main-content']['about-h4'];
textHeading[2].textContent = siteContent['main-content']['services-h4'];
textHeading[3].textContent = siteContent['main-content']['product-h4'];
textHeading[4].textContent = siteContent['main-content']['vision-h4'];

const textP = document.querySelectorAll('.text-content p');
console.log(textP);
textP[0].textContent = siteContent['main-content']['features-content'];
textP[1].textContent = siteContent['main-content']['about-content'];
textP[2].textContent = siteContent['main-content']['services-content'];
textP[3].textContent = siteContent['main-content']['product-content'];
textP[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Contact Info
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelectorAll('.contact p');
contactAddress[0].textContent = siteContent['contact']['address'];
contactAddress[1].textContent = siteContent['contact']['phone'];
contactAddress[2].textContent = siteContent['contact']['email'];

//Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

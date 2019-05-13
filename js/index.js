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

// Task 1: Create selectors to point your data into elements
// use IDs to update crs path content
let callToAction = document.getElementById("cta-img");
callToAction.setAttribute('src', 'img/header-img.png');

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

let topContent = document.querySelector('h1');
topContent.textContent = "Innovation On Demand";

let button = document.querySelector('button');
button.textContent = "Get Started";
//button.setAttribute('style', 'color: green');

/*
let nav = document.querySelectorAll("nav a");
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}
*/
const navBar = document.querySelector('nav');
const navLinks = navBar.querySelectorAll('a');
const navObj = siteContent.nav;
const navValues = Object.values(navObj);
[...navLinks].forEach((link, index) => {
  link.textContent = navValues[index];
});

navBar.style.color = "green";

/*
let navigation1 = document.querySelector("body > div > header > nav > a:nth-child(1)").textContent = "Home";
let navigation2 = document.querySelector("body > div > header > nav > a:nth-child(2)").textContent = "About";
let navigation3 = document.querySelector("body > div > header > nav > a:nth-child(3)").textContent = "Contact";
let navigation4 = document.querySelector("body > div > header > nav > a:nth-child(4)").textContent = "Home";
let navigation5 = document.querySelector("body > div > header > nav > a:nth-child(5)").textContent = "Home";
let navigation6 = document.querySelector("body > div > header > nav > a:nth-child(6)").textContent = "Home";

let nav = documnet.querySelector('nav');
nav.style.color = "inherit";

*/

/*
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a new paragraph';
paragraph.id = 'fancyParagraph';
paragraph.classList.add('cursive');
const section = document.querySelector('section[main-content]');
section.insertAdjacentElement('beforebegin', paragraph);
*/
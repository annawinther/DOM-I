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
// button.setAttribute('style', 'color: green');


// NAV BAR 

// let nav = document.querySelectorAll("nav a");
// for (i = 0; i < nav.length; i++) {
//   nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
// }

let navBar = document.querySelector('nav');
let navLinks = navBar.querySelectorAll('a');
let navObj = siteContent.nav;
let navValues = Object.values(navObj);
[...navLinks].forEach((link, index) => {
  link.textContent = navValues[index];
});
//navValues.setAttribute('style', 'color: green');


const navNew = document.createElement('a');
navNew.textContent = 'Home';

const nav = document.querySelector('nav');
nav.appendChild(navNew);

const navNew1 = document.createElement('a');
navNew1.textContent = 'Blog';

const nav1 = document.querySelector('nav');
nav.appendChild(navNew1);
// MIDDLE CONTENT 

// loop tried
/*
let mainContent = document.querySelectorAll('section h4');
for (let i = 1; i < mainContent.clientHeight; i++) {
  mainContent[i].textContent = 'hello';
}
*/

let featuresTitle = document.querySelector('div.top-content > div:nth-child(1) > h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector('div.top-content > div:nth-child(1) > p');
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutTitle = document.querySelector('div.top-content > div:nth-child(2) > h4');
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector('div.top-content > div:nth-child(2) > p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

let servicesTitle = document.querySelector
('div.bottom-content > div:nth-child(1) > h4');
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelector
('div.bottom-content > div:nth-child(2) > p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

let productTitle = document.querySelector( 'div.bottom-content > div:nth-child(2) > h4');
productTitle.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector('div.bottom-content > div:nth-child(1) > p');
productContent.textContent = siteContent["main-content"]["product-content"]

let visionTitle = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector('div.bottom-content > div:nth-child(3) > p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

// CONTACT

let contactTitle = document.querySelector(' section.contact > h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"];

//let contactInfo = document.querySelector('section.contact > p');
//contactInfo.textContent = siteContent["contact"]["address"]


//const contactBar = document.querySelector('.contact');
const contactP = document.querySelectorAll(' section.contact > p');
let contactObj = siteContent.contact;
let contactValues = Object.values(contactObj);
[...contactP].forEach((p, index) => {
  p.textContent = contactValues[index+1];
})

// let contact = document.querySelector('.contact p');
// for (let i = 0; contact.lenght; i++) {
//   contact[i].textContent = siteContent.contact[`contact {i+i}`];
// }

// let nav = document.querySelectorAll("nav a");
// for (i = 0; i < nav.length; i++) {
//   nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
// }


// let navBar = document.querySelector('nav');
// let navLinks = navBar.querySelectorAll('a');
// let navObj = siteContent.nav;
// let navValues = Object.values(navObj);
// [...navLinks].forEach((link, index) => {
//   link.textContent = navValues[index];
// });

// let navigation1 = document.querySelector("body > div > header > nav > a:nth-child(1)").textContent = "Home";
// let navigation2 = document.querySelector("body > div > header > nav > a:nth-child(2)").textContent = "About";
// let navigation3 = document.querySelector("body > div > header > nav > a:nth-child(3)").textContent = "Contact";
// let navigation4 = document.querySelector("body > div > header > nav > a:nth-child(4)").textContent = "Home";
// let navigation5 = document.querySelector("body > div > header > nav > a:nth-child(5)").textContent = "Home";
// let navigation6 = document.querySelector("body > div > header > nav > a:nth-child(6)").textContent = "Home";

// let nav = documnet.querySelector('nav');
// nav.style.color = "inherit";






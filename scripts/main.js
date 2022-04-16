// Navigation Toggle Button Functionality (from Project 1)
const nav = document.querySelector(".navigation");
function navBar() {
    nav.classList.toggle("navActive");
}


// Sections
const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about')
const contactSection = document.querySelector('.contact')
const portfolioSection = document.querySelector('.portfolio')
// Links
const aboutLink = document.querySelector('.aboutLink')
const homeLink = document.querySelector('.homeLink')
const portfolioLink = document.querySelector('.portfolioLink')
const contactLink = document.querySelector('.contactLink')

const pageChange = (section) => {
    homeSection.classList.remove('active')
    aboutSection.classList.remove('active')
    contactSection.classList.remove('active')
    portfolioSection.classList.remove('active')
    section.classList.add('active')
    nav.classList.toggle("navActive");

}
aboutLink.addEventListener('click', () => {
    pageChange(aboutSection);
})

homeLink.addEventListener('click', () => {
    pageChange(homeSection);
})

contactLink.addEventListener('click', () => {
    pageChange(contactSection);
})

portfolioLink.addEventListener('click', () => {
    pageChange(portfolioSection);
})
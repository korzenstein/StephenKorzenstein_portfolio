// Navigation Toggle Button Functionality (from Project 1)
const nav = document.querySelector(".navigation");
function navBar() {
  nav.classList.toggle("navActive");
}

// Sections
const homeSection = document.querySelector(".home");
const contactSection = document.querySelector(".contact");
const portfolioSection = document.querySelector(".portfolio");
const body = document.querySelector(".bodyContainer");
// const navActive = document.querySelector(".navActive");
// Links
const homeLink = document.querySelector(".homeLink");
const portfolioLink = document.querySelector(".portfolioLink");
const contactLink = document.querySelector(".contactLink");

const pageChange = (section) => {
  homeSection.classList.remove("active");
  contactSection.classList.remove("active");
  portfolioSection.classList.remove("active");
  section.classList.add("active");
  nav.classList.toggle("navActive");
};

homeLink.addEventListener("click", () => {
  pageChange(homeSection);
  // navActive.style.backgroundColor = '#f8c2cc'
  body.style.backgroundColor = '#f8c2cc'
});

contactLink.addEventListener("click", () => {
  pageChange(contactSection);
  // navActive.style.backgroundColor = '#fecb46'
  body.style.backgroundColor = '#fecb46'
});

portfolioLink.addEventListener("click", () => {
  pageChange(portfolioSection);
  // navActive.style.backgroundColor = '#27bfd5'
  body.style.backgroundColor = '#27bfd5'
});

// Portfolio container

const projLabels = document.querySelectorAll(".projLabel");
const projects = document.querySelectorAll(".project");

projLabels.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    // console.log(bttn.id)
    let chosen = bttn.id;
    console.log(chosen);
    // let whatToDisplay = [...projects].filter(p => p.classList.contains(chosen))
    // console.log(whatToDisplay)
    projects.forEach((project) => {
      console.log(project);
      project.classList.remove("display");
      if (project.classList.contains(chosen)) {
        // project.classList.add('display')
        console.log(project.classList);
        project.classList.add("display");
      }
    });
  });
});

// (() => {
  
// })();

// Under the hood hovers

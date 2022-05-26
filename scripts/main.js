// Navigation toggle button functionality on mobile
const nav = document.querySelector(".navigation");
const navButtonMain = document.querySelector('.navButtonToggle')
const navButtonSecondary = document.querySelector('.navButton')

navButtonMain.addEventListener("click", () => {
  nav.classList.add("navActive")
})
navButtonSecondary.addEventListener("click", () => {
  nav.classList.remove("navActive")
})

// Sections declared as variables
const homeSection = document.querySelector(".home");
const contactSection = document.querySelector(".contact");
const portfolioSection = document.querySelector(".portfolio");
const body = document.querySelector(".bodyContainer");
// Links declared as variables
const homeLink = document.querySelector(".homeLink");
const portfolioLink = document.querySelector(".portfolioLink");
const contactLink = document.querySelector(".contactLink");


// Functionality to change background color and section 

const pageChange = (section) => {
  homeSection.classList.remove("active");
  contactSection.classList.remove("active");
  portfolioSection.classList.remove("active");
  section.classList.add("active");
  nav.classList.toggle("navActive");
};

const mediaQuery = window.matchMedia('(min-width: 640px)')


homeLink.addEventListener("click", () => {
  pageChange(homeSection);
  body.style.backgroundColor = "#f8c2cc";
  
  if (mediaQuery.matches) {
  nav.style.backgroundColor = "248, 194, 204, 0.5";
}
});

contactLink.addEventListener("click", () => {
  pageChange(contactSection);
  body.style.backgroundColor = "#fecb46";

  if (mediaQuery.matches) {
  nav.style.backgroundColor = "254, 203, 70, 0.5";
}
});

portfolioLink.addEventListener("click", () => {
  pageChange(portfolioSection);
  body.style.backgroundColor = "#27bfd5";

  if (mediaQuery.matches) {
  nav.style.backgroundColor = "39, 191, 213, 0.5";
}
});

// Functionality to change Projects on Portfolio section

const projLabels = document.querySelectorAll(".projLabel");
const projects = document.querySelectorAll(".project");

const projectChooser = () => {
  projLabels.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    let chosen = bttn.id
    projects.forEach((project) => {
      project.classList.remove("display");
      if (project.classList.contains(chosen)) {
        project.classList.add("display");
      }
    });
  });
});
}


projectChooser()
window.onload=function(){
  document.getElementById("four").click();
};


// Functionality to blur out surrounding text and isolate icons with name tags 

const flyaway = document.querySelectorAll(".flyaway");
const highlight = document.querySelectorAll(".highlight");
const introText = document.querySelector(".introText");
const icons = document.querySelectorAll(".iconSpansHome");
const skillsTitle = document.querySelector(".skillsTitle");

const animate = () => {
  
  flyaway.forEach((fly) => {
    fly.classList.toggle("takeflight");
  })
  highlight.forEach((high) => {
    high.classList.toggle("takeflight");
  })
  skillsTitle.classList.toggle("visible")
  icons.forEach((icon) => {
      icon.classList.toggle('skillsAfter')
    })
}

icons.forEach((icon) => {
  icon.addEventListener("click", animate);
});


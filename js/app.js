// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get all the 'nav' elements
  var navItems = document.querySelectorAll('.nav a');

  // Add a 'click' event listener to each nav item
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Remove 'active' class from all nav items
      navItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // Add 'active' class to the clicked item
      this.classList.add('active');
    });
  });
});

// Typing animation

document.addEventListener('DOMContentLoaded', function () {
  // Initialize typing animation on the first element
  var typed1 = new Typed(".typing:first-of-type", {
    strings: ["Christian ", "Web Developer", "Mobile Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Initialize typing animation on the second element
  var typed2 = new Typed(".typing:last-of-type", {
    strings: ["Programming ", "Web Developer", "Mobile Developer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});

// Aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
  for(let i=0; i<totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a.addEventListener("click", function() {
        removeBackSection();
        for(let j=0; j<totalNavList; j++) {
          if(navList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
            // allSection[j].classList.add("back-section");
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200) {
          asideSectionTogglerBtn();
        }
      })
  }
  function removeBackSection() {
    for(let i=0; i<totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }
  function addBackSection(num) {
    allSection[num].classList.add("back-section");
  }
  function showSection(element) {
    for(let i=0; i<totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    // Get the target element ID from the element's href attribute
    const target = element.getAttribute("href").split("#")[1];
    // Select the target element
    document.querySelector("#" + target).classList.add("active");

  }
  function updateNav(element) {
    for(let i=0; i<totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })
document.querySelector(".accueil").addEventListener("click", function() {
  // Assuming '0' is the index of the home section in your sections
  const sectionIndex = 0; // Change this index to the index of your home section
  // Remove the existing class and add 'active' to the home section
  allSection.forEach(section => section.classList.remove('active'));
  allSection[sectionIndex].classList.add('active');

  // Update the navigation to reflect the change
  navList.forEach(item => item.classList.remove('active'));
  navList[sectionIndex].classList.add('active');

  removeBackSection();
  addBackSection(sectionIndex);
})
  const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  })
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }
// Définition des variables pour le sujet et le corps
let subject = '';
let body = '';

// Écouteur d'événements pour le champ 'Sujet'
document.getElementById('emailSubject').addEventListener('change', function() {
  subject = encodeURIComponent(this.value); // Mise à jour du sujet
  updateMailto(); // Mise à jour de l'URL mailto
});

// Écouteur d'événements pour le champ 'Message'
document.getElementById('Message').addEventListener('change', function() {
  body = encodeURIComponent(this.value); // Mise à jour du corps du message
  updateMailto(); // Mise à jour de l'URL mailto
});

// Fonction pour mettre à jour l'attribut 'action' du formulaire avec les nouvelles valeurs
function updateMailto() {
  const form = document.getElementById('contactForm');
  form.action = `mailto:ralph_christian.gabriel@hotmail.com?subject=${subject}&body=${body}`;
}

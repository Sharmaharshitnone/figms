// JavaScript for tab navigation and responsive features

document.addEventListener("DOMContentLoaded", function () {
  // URL hash-based routing
  function handleHashRouting() {
    const hash = window.location.hash;

    // Default to login if no hash is present
    if (!hash || hash === "") {
      navigateToTab("login");
      return;
    }

    // Map hash routes to tab IDs
    switch (hash) {
      case "#1":
        navigateToTab("dashboard");
        break;
      case "#2":
        navigateToTab("login");
        break;
      case "#3":
        navigateToTab("project-view");
        break;
      case "#4":
        navigateToTab("concept-proof");
        break;
      default:
        navigateToTab("login"); // Default to login for any other hash
    }
  }

  function navigateToTab(tabId) {
    // Find the tab with the matching data-tab attribute
    const targetTab = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (targetTab) {
      // Simulate a click on the tab
      targetTab.click();
    }
  }

  // Run the hash routing on page load
  handleHashRouting();

  // Listen for hash changes to update the view
  window.addEventListener("hashchange", handleHashRouting);

  // Tab navigation functionality
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Get the tab identifier
      const tabId = this.getAttribute("data-tab");

      // Remove active class from all tabs
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Hide all content sections
      const contentSections = document.querySelectorAll(".wireframe-content");
      contentSections.forEach((section) => section.classList.remove("active"));

      // Show the selected content section
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Form tab functionality (in the login/signup page)
  const formTabs = document.querySelectorAll(".form-tab");
  formTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      formTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Concept tab functionality
  const conceptTabs = document.querySelectorAll(".tab-item");
  conceptTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      conceptTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "flex";
      }
    });
  }

  // Handle window resize to hide/show mobile menu appropriately
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && mobileMenu) {
      mobileMenu.style.display = "none";
    }
  });

  // Make buttons interactive (just visual feedback)
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function () {
      this.style.opacity = "0.7";
    });

    button.addEventListener("mouseup", function () {
      this.style.opacity = "1";
    });

    button.addEventListener("mouseout", function () {
      this.style.opacity = "1";
    });
  });

  // Project cards click interaction
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      // This would navigate to project details in a real app
      // For this wireframe, we'll just simulate by changing tab

      // Only if we're not clicking the "add new" card
      if (!this.classList.contains("add-new")) {
        const projectViewTab = document.querySelector(
          '.tab[data-tab="project-view"]'
        );
        if (projectViewTab) {
          projectViewTab.click();
        }
      }
    });
  });
});

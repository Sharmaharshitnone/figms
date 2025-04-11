// JavaScript for tab navigation in the low-fidelity wireframe

document.addEventListener("DOMContentLoaded", function () {
  // Get all tabs
  const tabs = document.querySelectorAll(".tab");
  
  // Function to navigate to a specific tab
  function navigateToTab(tabIndex) {
    if (tabIndex >= 0 && tabIndex < tabs.length) {
      const tab = tabs[tabIndex];
      const tabId = tab.getAttribute("data-tab");
      
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      
      // Add active class to target tab
      tab.classList.add("active");
      
      // Hide all content sections
      const contentSections = document.querySelectorAll(".wireframe-content");
      contentSections.forEach((section) => section.classList.remove("active"));
      
      // Show the selected content section
      document.getElementById(tabId).classList.add("active");
    }
  }

  // URL hash change handler
  function handleHashChange() {
    // Get hash without the # symbol
    const hash = window.location.hash.substring(1);
    
    // Check if the hash is a number between 1 and the number of tabs
    if (/^[1-9]\d*$/.test(hash)) {
      const tabIndex = parseInt(hash) - 1; // Convert to 0-based index
      navigateToTab(tabIndex);
    }
  }

  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);
  
  // Check hash on initial page load
  handleHashChange();

  // Add click event listener to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Update the URL hash when clicking a tab
      window.location.hash = (index + 1).toString();
      
      // Navigation is handled by the hashchange event
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
});

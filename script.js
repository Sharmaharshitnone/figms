// JavaScript for tab navigation in the low-fidelity wireframe

document.addEventListener("DOMContentLoaded", function () {
  // Get all tabs
  const tabs = document.querySelectorAll(".tab");

  // Add click event listener to each tab
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

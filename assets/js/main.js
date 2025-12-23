/* Portfolio JavaScript - Enhanced Premium Interactions */

// Set theme immediately to prevent flash
(function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  console.log("Initial theme set to:", savedTheme);
})();

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing...");
  initThemeToggle();
  initNavbarScroll();
  initContactForm();
  setActiveNav();
  initScrollAnimations();
  initProjectFilters();
  initCopyToClipboard();
});

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  console.log("Theme toggle button found:", themeToggle);

  if (!themeToggle) {
    console.error("Theme toggle button not found!");
    return;
  }

  const htmlElement = document.documentElement;
  const currentTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);
  console.log("Theme toggle initialized with theme:", currentTheme);

  themeToggle.addEventListener("click", function (e) {
    console.log("Theme toggle clicked!");
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    console.log("Switching from", currentTheme, "to", newTheme);
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
    console.log("Theme switched to:", newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) {
    console.error("Cannot update icon - button not found");
    return;
  }

  const icon = themeToggle.querySelector("i");
  if (!icon) {
    console.error("Cannot update icon - icon element not found");
    return;
  }

  console.log("Updating icon for theme:", theme);
  if (theme === "dark") {
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-fill");
  } else {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
  }
}

function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    link.classList.remove("active");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "index.html") ||
      (currentPage === "index.html" && linkHref === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();
}

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  const documentCards = document.querySelectorAll(".document-card");
  documentCards.forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    item.classList.add("fade-in");
    item.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(item);
  });
}

function initProjectFilters() {
  const filterPills = document.querySelectorAll(".filter-pill");
  const projectCards = document.querySelectorAll("[data-category]");

  if (filterPills.length === 0) return;

  filterPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      const filter = this.dataset.filter;

      filterPills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");

      projectCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "";
          card.classList.add("fade-in");
          setTimeout(() => card.classList.add("visible"), 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

function initCopyToClipboard() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const textToCopy = this.dataset.copy;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          showToast("Copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy:", err);
          showToast("Failed to copy", "error");
        });
    });
  });
}

function showToast(message, type = "success") {
  const existingToast = document.querySelector(".toast-notification");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.innerHTML = `
    <i class="bi bi-check-circle-fill"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease-out forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

const style = document.createElement("style");
style.textContent = `
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  const hasFormspree =
    contactForm.action && contactForm.action.includes("formspree.io");

  if (hasFormspree) {
    contactForm.addEventListener("submit", function (e) {
      const fullName = document.getElementById("fullName")?.value;
      const email = document.getElementById("email")?.value;
      const subject = document.getElementById("subject")?.value;
      const message = document.getElementById("message")?.value;
      const privacyCheck = document.getElementById("privacyCheck")?.checked;

      if (!fullName || !email || !subject || !message) {
        e.preventDefault();
        showAlert("Please fill in all required fields.", "danger");
        return;
      }

      if (privacyCheck !== undefined && !privacyCheck) {
        e.preventDefault();
        showAlert("Please accept the privacy agreement.", "danger");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        showAlert("Please enter a valid email address.", "danger");
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
      }
    });
  } else {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullName = document.getElementById("fullName")?.value;
      const email = document.getElementById("email")?.value;
      const subject = document.getElementById("subject")?.value;
      const message = document.getElementById("message")?.value;
      const privacyCheck = document.getElementById("privacyCheck")?.checked;

      if (!fullName || !email || !subject || !message) {
        showAlert("Please fill in all required fields.", "danger");
        return;
      }

      if (privacyCheck !== undefined && !privacyCheck) {
        showAlert("Please accept the privacy agreement.", "danger");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showAlert("Please enter a valid email address.", "danger");
        return;
      }

      showAlert(
        "Thank you for your message! I'll get back to you soon.",
        "success"
      );
      contactForm.reset();
    });
  }
}

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  const form = document.getElementById("contactForm");
  if (form) {
    form.parentNode.insertBefore(alertDiv, form);
    setTimeout(() => alertDiv.remove(), 5000);
  }
}

console.log(
  "%cHello there! 👋",
  "font-size: 20px; font-weight: bold; color: #10B981;"
);
console.log(
  "%cBuilt with HTML, Bootstrap 5, and vanilla JavaScript",
  "font-size: 12px; color: #9CA3AF;"
);

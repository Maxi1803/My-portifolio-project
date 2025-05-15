// Greet user based on time
function greetUser() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    let message = "Welcome!";
  
    if (hour < 12) message = "Good Morning!";
    else if (hour < 18) message = "Good Afternoon!";
    else message = "Good Evening!";
  
    if (greeting) greeting.textContent = message;
  }
  
  // Typing animation
  const textArray = ["Web Developer", "UI/UX Enthusiast", "JavaScript Ninja"];
  let typingIndex = 0, charIndex = 0;
  function typeText() {
    const target = document.getElementById("typing-text");
    if (!target) return;
    if (charIndex < textArray[typingIndex].length) {
      target.textContent += textArray[typingIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else setTimeout(eraseText, 2000);
  }
  function eraseText() {
    const target = document.getElementById("typing-text");
    if (!target) return;
    if (charIndex > 0) {
      target.textContent = textArray[typingIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      typingIndex = (typingIndex + 1) % textArray.length;
      setTimeout(typeText, 500);
    }
  }
  
  // Theme toggle with localStorage
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  }
  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") document.body.classList.add("dark-mode");
  }
  
  // Scroll to top button
  window.onscroll = function () {
    const btn = document.getElementById("scrollTop");
    if (btn) btn.style.display = window.scrollY > 200 ? "block" : "none";
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Toggle project details
  function toggleDetails(element) {
    const details = element.querySelector(".details");
    if (details) details.style.display = (details.style.display === "block") ? "none" : "block";
  }
  
  // Contact form validation
  function validateContactForm() {
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
  
    if (!emailRegex.test(email)) {
      alert("Enter a valid email."); return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Enter a valid 10-digit phone."); return false;
    }
    return true;
  }
  
  window.onload = function () {
    greetUser();
    loadTheme();
    typeText();
  };
  // Validate survey form
function validateSurveyForm() {
    const age = document.getElementById("age").value;
    const tool = document.querySelector('input[name="tool"]:checked');
    const experience = document.querySelector('input[name="experience"]:checked');
    const interests = document.querySelectorAll('input[name="interest"]:checked');
    const methods = document.querySelectorAll('input[name="method"]:checked');
    const satisfaction = document.getElementById("satisfaction").value;
  
    if (age === "") {
      alert("Please select your age group.");
      return false;
    }
  
    if (!tool) {
      alert("Please choose your favorite development tool.");
      return false;
    }
  
    if (!experience) {
      alert("Please select your experience level.");
      return false;
    }
  
    if (interests.length === 0) {
      alert("Please select at least one area of interest.");
      return false;
    }
  
    if (methods.length === 0) {
      alert("Please select at least one preferred learning method.");
      return false;
    }
  
    if (satisfaction < 1 || satisfaction > 10) {
      alert("Please rate your satisfaction from 1 to 10.");
      return false;
    }
  
    // Optional: Add feedback confirmation
    alert("Thank you for completing the survey!");
    return true;
  }
  
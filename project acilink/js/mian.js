// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
})
document.getElementById("appointmentForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form values
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let message = document.getElementById("message").value;

  // Validate form (you can add more validation as needed)
  if (!fullName || !email || !phone || !date) {
    alert("Please fill in all required fields");
    return;
  }

  // You can handle form submission here, e.g., send data to server or display a success message
  alert("Appointment booked successfully!");

  // Reset form
  document.getElementById("appointmentForm").reset();
});


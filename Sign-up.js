// ✅ Set max DOB to 18 years ago (correctly, with local time)
const dobInput = document.getElementById("dob");
const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

// Format date as yyyy-mm-dd without timezone shift
const yyyy = eighteenYearsAgo.getFullYear();
const mm = String(eighteenYearsAgo.getMonth() + 1).padStart(2, '0');
const dd = String(eighteenYearsAgo.getDate()).padStart(2, '0');
dobInput.max = `${yyyy}-${mm}-${dd}`;

const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("error-msg");
const successMessage = document.getElementById("successMessage");
const togglePassword = document.getElementById("togglePassword");

// Password visibility toggle
togglePassword.addEventListener('click', function() {
  const passwordInput = document.getElementById("password");
  const icon = this.querySelector('i');
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = "password";
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const contact = document.getElementById("contact").value.trim();

  // Check for empty fields
  if (!username || !password || !dob || !gender || !contact) {
    errorMsg.textContent = "Please fill in all fields.";
    errorMsg.style.display = 'block';
    return;
  }

  // Validate password length
  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    errorMsg.style.display = 'block';
    return;
  }

  // Validate contact number
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(contact)) {
    errorMsg.textContent = "Please enter a valid 10-digit contact number.";
    errorMsg.style.display = 'block';
    return;
  }

  // ✅ Save as-is: no Date conversion = no shift
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userDetails", JSON.stringify({
    username,
    dob, // keep string format
    gender,
    contact
  }));

  // Store username separately for easy access in welcome message
  localStorage.setItem("username", username);

  // Show success message
  successMessage.classList.add('show');
  
  // Hide error message if shown
  errorMsg.style.display = 'none';
  
  // Redirect after a brief delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});

// Hide error message when user starts typing
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    errorMsg.style.display = 'none';
  });
});
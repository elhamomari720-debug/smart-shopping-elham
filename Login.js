document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const errorMsg = document.getElementById('error-msg');
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.querySelector('.login-btn');
  const btnText = document.querySelector('.btn-text');
  const btnLoader = document.querySelector('.btn-loader');
  const googleLoginBtn = document.getElementById('googleLogin');
  const facebookLoginBtn = document.getElementById('facebookLogin');

  // Remove Facebook button (if you don’t want it)
  facebookLoginBtn.style.display = 'none';

  // ✅ Correct Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyCJU7RC98EHKZJ9Tm7hu_F5ibbO6qjpPug",
    authDomain: "smart-shopping-97612.firebaseapp.com",
    projectId: "smart-shopping-97612",
    storageBucket: "smart-shopping-97612.appspot.com",
    messagingSenderId: "340530767521",
    appId: "1:340530767521:web:93feb5748a1918a48372e0",
    measurementId: "G-5F29HX9JBM"
  };

  // Initialize Firebase
  let auth;
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    console.log('✅ Firebase initialized');
  } catch (error) {
    console.error('Firebase init error:', error);
    errorMsg.textContent = 'Firebase configuration error. Please check your config.';
    return;
  }

  // Google Login
  googleLoginBtn.addEventListener('click', function () {
    signInWithGoogle();
  });

  async function signInWithGoogle() {
    setSocialLoadingState(googleLoginBtn, true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      provider.setCustomParameters({ prompt: 'select_account' });

      const result = await auth.signInWithPopup(provider);
      const user = result.user;

      console.log('Google login successful:', user);

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.displayName || user.email);
      localStorage.setItem('userDetails', JSON.stringify({
        username: user.displayName,
        email: user.email,
        picture: user.photoURL,
        uid: user.uid
      }));

      setSocialLoadingState(googleLoginBtn, false);
      showSuccessMessage(`Welcome ${user.displayName || user.email}! Redirecting...`);

      setTimeout(() => window.location.href = 'index.html', 1500);
    } catch (error) {
      setSocialLoadingState(googleLoginBtn, false);
      console.error('Google login error:', error);
      errorMsg.textContent = error.message;
    }
  }

  // Regular login (demo using localStorage)
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const inputs = document.querySelectorAll('#usernameOrEmail, #password');
    inputs.forEach((input) => {
      if (!validateInput(input)) isValid = false;
    });

    if (!isValid) {
      errorMsg.textContent = 'Please correct the errors above.';
      return;
    }

    setLoadingState(true);

    const usernameOrEmail = document.getElementById('usernameOrEmail').value.trim();
    const password = passwordInput.value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simulate login (replace with Firebase auth if needed)
    setTimeout(() => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', usernameOrEmail);
      localStorage.setItem('userDetails', JSON.stringify({
        username: usernameOrEmail,
        email: usernameOrEmail.includes('@') ? usernameOrEmail : ''
      }));

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('usernameOrEmail', usernameOrEmail);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('usernameOrEmail');
      }

      setLoadingState(false);
      showSuccessMessage(`Welcome ${usernameOrEmail}! Redirecting...`);

      setTimeout(() => window.location.href = 'index.html', 1500);
    }, 1500);
  });

  // Toggle password visibility
  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye-slash');
  });

  // Input validation
  function validateInput(input) {
    const value = input.value.trim();
    const errorElement = input.parentElement.querySelector('.input-error');
    errorElement.textContent = '';

    if (input.hasAttribute('required') && !value) {
      errorElement.textContent = 'This field is required.';
      return false;
    }
    if (input.type === 'password' && value.length < 6) {
      errorElement.textContent = 'Password must be at least 6 characters.';
      return false;
    }
    return true;
  }

  function setLoadingState(isLoading) {
    if (isLoading) {
      btnText.classList.add('hidden');
      btnLoader.classList.remove('hidden');
      loginBtn.disabled = true;
    } else {
      btnText.classList.remove('hidden');
      btnLoader.classList.add('hidden');
      loginBtn.disabled = false;
    }
  }

  function setSocialLoadingState(button, isLoading) {
    let btnLoader = button.querySelector('.btn-loader');
    let btnText = button.querySelector('.btn-text');

    if (!btnText) {
      btnText = document.createElement('span');
      btnText.className = 'btn-text';
      btnText.innerHTML = button.innerHTML;
      button.innerHTML = '';
      button.appendChild(btnText);
    }

    if (!btnLoader) {
      btnLoader = document.createElement('div');
      btnLoader.className = 'btn-loader hidden';
      btnLoader.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      button.appendChild(btnLoader);
    }

    if (isLoading) {
      btnText.classList.add('hidden');
      btnLoader.classList.remove('hidden');
      button.disabled = true;
    } else {
      btnText.classList.remove('hidden');
      btnLoader.classList.add('hidden');
      button.disabled = false;
    }
  }

  function showSuccessMessage(message) {
    errorMsg.textContent = message;
    errorMsg.style.color = 'green';
  }

  // Forgot password
  document.querySelector('.forgot-link').addEventListener('click', function (e) {
    e.preventDefault();
    const emailOrUser = document.getElementById('usernameOrEmail').value.trim();
    alert(emailOrUser ? `Password reset instructions would be sent to: ${emailOrUser}` : 'Please enter your email or username first.');
  });

  // Remember me logic
  if (localStorage.getItem('rememberMe') === 'true') {
    document.getElementById('rememberMe').checked = true;
    const savedUser = localStorage.getItem('usernameOrEmail');
    if (savedUser) document.getElementById('usernameOrEmail').value = savedUser;
  }
});

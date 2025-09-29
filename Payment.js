document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const form = document.getElementById('buyForm');
  const submitBtn = document.getElementById('submit-btn');
  const backBtn = document.getElementById('back-btn');
  const supportFab = document.getElementById('support-fab');
  const successMessage = document.getElementById('success-message');
  const paymentOptions = document.querySelectorAll('.payment-option');
  
  // Initialize the page with animations
  initPage();
  
  // Form submission handler
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    processFormSubmission();
  });
  
  // Back button handler
  backBtn.addEventListener('click', function() {
    animateButtonClick(backBtn);
    setTimeout(() => {
      window.location.href = 'Add-to-cart.html';
    }, 300);
  });
  
  // Support FAB handler
  supportFab.addEventListener('click', function() {
    animateButtonClick(supportFab);
    showNotification('Support', 'Our support team will contact you shortly.');
  });
  
  // Payment option selection
  paymentOptions.forEach(option => {
    if (!option.classList.contains('disabled')) {
      option.addEventListener('click', function() {
        selectPaymentOption(this);
      });
    }
  });
  
  // Input validation on blur
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    input.addEventListener('input', function() {
      // Clear validation state when user starts typing
      clearFieldValidation(this);
      // Auto-save form data
      autoSaveForm();
    });
    
    // Add focus effects
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
  
  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Submit form on Ctrl+Enter
    if (e.ctrlKey && e.key === 'Enter') {
      form.dispatchEvent(new Event('submit'));
    }
    
    // Navigate back on Escape
    if (e.key === 'Escape') {
      backBtn.click();
    }
  });
  
  // Initialize functions
  function initPage() {
    // Load saved form data
    loadSavedFormData();
    
    // Select Cash on Delivery by default
    selectPaymentOption(document.querySelector('.payment-option[data-method="cod"]'));
    
    // Animate elements on page load
    animateOnScroll();
    
    // Add intersection observer for animations
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.premium-card, .security-features').forEach(el => {
        observer.observe(el);
      });
    }
  }
  
  function selectPaymentOption(option) {
    // Remove active class from all options
    paymentOptions.forEach(opt => {
      opt.classList.remove('active');
    });
    
    // Add active class to selected option
    option.classList.add('active');
    
    // Update button text based on selected payment method
    const method = option.getAttribute('data-method');
    if (method === 'cod') {
      submitBtn.querySelector('.btn-text').innerHTML = '<i class="fas fa-truck"></i> Place Order (Cash on Delivery)';
    }
  }
  
  function processFormSubmission() {
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Validate all fields
    const isValid = validateForm();
    
    if (isValid) {
      // Simulate order processing
      simulateOrderProcessing()
        .then(() => {
          // Show success message
          showSuccessMessage();
          
          // Clear saved form data
          localStorage.removeItem('premiumCheckoutFormData');
          
          // Redirect after delay
          setTimeout(() => {
            window.location.href = 'Deliver.html';
          }, 4000);
        })
        .catch(error => {
          console.error('Order processing error:', error);
          showNotification('Order Failed', 'Please try again or contact support.');
          submitBtn.classList.remove('loading');
        });
    } else {
      // Remove loading state if validation failed
      submitBtn.classList.remove('loading');
      
      // Shake form to indicate errors
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 500);
    }
  }
  
  function validateForm() {
    let isValid = true;
    
    // Validate each field
    const fields = [
      { id: 'name', validator: validateName },
      { id: 'email-address', validator: validateEmail },
      { id: 'address', validator: validateAddress },
      { id: 'contact', validator: validateContact }
    ];
    
    fields.forEach(field => {
      const element = document.getElementById(field.id);
      if (!field.validator(element.value)) {
        showFieldError(field.id, getValidationMessage(field.id));
        isValid = false;
      } else {
        hideFieldError(field.id);
        markFieldAsValid(field.id);
      }
    });
    
    return isValid;
  }
  
  function validateField(field) {
    const value = field.value.trim();
    const fieldId = field.id;
    
    let isValid = false;
    
    switch (fieldId) {
      case 'name':
        isValid = validateName(value);
        break;
      case 'email-address':
        isValid = validateEmail(value);
        break;
      case 'address':
        isValid = validateAddress(value);
        break;
      case 'contact':
        isValid = validateContact(value);
        break;
    }
    
    if (isValid) {
      hideFieldError(fieldId);
      markFieldAsValid(fieldId);
    } else if (value !== '') {
      showFieldError(fieldId, getValidationMessage(fieldId));
    }
  }
  
  // Validation functions
  function validateName(name) {
    return name.trim().length >= 2;
  }
  
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function validateAddress(address) {
    return address.trim().length >= 10;
  }
  
  function validateContact(contact) {
    const contactPattern = /^[0-9]{10}$/;
    return contactPattern.test(contact);
  }
  
  function getValidationMessage(fieldId) {
    const messages = {
      'name': 'Please enter your full name (at least 2 characters)',
      'email-address': 'Please enter a valid email address',
      'address': 'Please enter a complete address (at least 10 characters)',
      'contact': 'Please enter a valid 10-digit phone number'
    };
    
    return messages[fieldId] || 'This field is required';
  }
  
  // UI feedback functions
  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const validationElement = document.getElementById(fieldId + '-validation');
    
    if (validationElement) {
      validationElement.textContent = message;
      validationElement.style.display = 'flex';
    }
    
    field.classList.add('invalid');
    field.classList.remove('valid');
  }
  
  function hideFieldError(fieldId) {
    const validationElement = document.getElementById(fieldId + '-validation');
    if (validationElement) {
      validationElement.style.display = 'none';
    }
  }
  
  function markFieldAsValid(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.add('valid');
    field.classList.remove('invalid');
  }
  
  function clearFieldValidation(field) {
    const fieldId = field.id;
    hideFieldError(fieldId);
    field.classList.remove('valid', 'invalid');
  }
  
  function showSuccessMessage() {
    // Hide form
    form.style.opacity = '0';
    
    // Show success message after a short delay
    setTimeout(() => {
      successMessage.style.display = 'flex';
      
      // Animate progress bar to completion
      document.querySelector('.progress-fill').style.width = '100%';
      document.querySelectorAll('.step')[3].classList.add('completed');
    }, 500);
  }
  
  function animateButtonClick(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 150);
  }
  
  function showNotification(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="notification-content">
        <strong>${title}</strong>
        <p>${message}</p>
      </div>
    `;
    
    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      max-width: 300px;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }
  
  function simulateOrderProcessing() {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // 95% success rate for simulation
        if (Math.random() < 0.95) {
          resolve();
        } else {
          reject(new Error('Order processing failed'));
        }
      }, 2000);
    });
  }
  
  // Form auto-save functionality
  function autoSaveForm() {
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email-address').value,
      address: document.getElementById('address').value,
      contact: document.getElementById('contact').value,
      instructions: document.getElementById('delivery-instructions').value
    };
    
    localStorage.setItem('premiumCheckoutFormData', JSON.stringify(formData));
  }
  
  function loadSavedFormData() {
    const savedData = localStorage.getItem('premiumCheckoutFormData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      
      document.getElementById('name').value = formData.name || '';
      document.getElementById('email-address').value = formData.email || '';
      document.getElementById('address').value = formData.address || '';
      document.getElementById('contact').value = formData.contact || '';
      document.getElementById('delivery-instructions').value = formData.instructions || '';
    }
  }
  
  // Scroll animations
  function animateOnScroll() {
    const elements = document.querySelectorAll('.premium-card, .security-features');
    
    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    setTimeout(() => {
      elements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }, 100);
  }
});
// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Start the loading animation
    startLoadingAnimation();
    
    // Form submission handler
    document.getElementById('paymentForm').addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
    
    // Add real-time validation
    addRealTimeValidation();
    
    // Add interactive effects
    addInteractiveEffects();
});

// Start the loading animation
function startLoadingAnimation() {
    const loadingContainer = document.getElementById('loadingContainer');
    const mainContent = document.getElementById('mainContent');
    
    // After loading completes, show main content
    setTimeout(() => {
        loadingContainer.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Add subtle entrance animation to form elements
        animateFormEntrance();
    }, 3000); // Match the duration of loading animation
}

// Animate form elements entrance
function animateFormEntrance() {
    const formElements = document.querySelectorAll('.payment-container > *');
    formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add real-time validation
function addRealTimeValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const container = field.parentElement;
    const errorElement = document.getElementById(field.id + '-error');
    
    // Remove previous validation classes
    container.classList.remove('valid', 'invalid');
    
    if (!value) {
        container.classList.add('invalid');
        showError(errorElement, 'This field is required');
        return false;
    }
    
    // Field-specific validation
    let isValid = true;
    let errorMessage = '';
    
    switch(field.id) {
        case 'name':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'address':
            if (value.length < 10) {
                isValid = false;
                errorMessage = 'Address must be at least 10 characters';
            }
            break;
        case 'phone':
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(value.replace(/\D/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid 10-digit phone number';
            }
            break;
    }
    
    if (isValid) {
        container.classList.add('valid');
        hideError(errorElement);
        return true;
    } else {
        container.classList.add('invalid');
        showError(errorElement, errorMessage);
        return false;
    }
}

// Show error message
function showError(errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Hide error message
function hideError(errorElement) {
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

// Check if all required fields are valid
function isFormValid() {
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    let allValid = true;
    
    requiredInputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });
    
    return allValid;
}

// Process order submission
function processOrder() {
    const submitBtn = document.getElementById('submitBtn');
    
    // Validate all fields
    if (!isFormValid()) {
        // Shake the form to indicate errors
        document.getElementById('paymentForm').classList.add('shake');
        setTimeout(() => {
            document.getElementById('paymentForm').classList.remove('shake');
        }, 500);
        
        // Scroll to first error
        const firstError = document.querySelector('.invalid');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.querySelector('input, textarea').focus();
        }
        
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Launching...';
    
    // Show success animation
    setTimeout(() => {
        showSuccessAnimation();
    }, 1500);
}

// Show success animation
function showSuccessAnimation() {
    const mainContent = document.getElementById('mainContent');
    const successAnimation = document.getElementById('successAnimation');
    
    // Hide main content and show success animation
    mainContent.style.display = 'none';
    successAnimation.style.display = 'flex';
    
    // Update progress bar
    document.querySelector('.progress-fill').style.width = '100%';
    document.querySelectorAll('.step')[3].classList.add('completed');
    
    // Redirect to Deliver.html after success animation
    setTimeout(() => {
        window.location.href = 'Deliver.html';
    }, 3000);
}

// Go back to Add-to-cart.html
function goToCart() {
    if (confirm('Are you sure you want to go back to cart? Your information will be lost.')) {
        window.location.href = 'Add-to-cart.html';
    }
}

// Reset form
function resetForm() {
    document.getElementById('paymentForm').reset();
    
    // Clear validation states
    const containers = document.querySelectorAll('.input-container');
    containers.forEach(container => {
        container.classList.remove('valid', 'invalid');
    });
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.classList.remove('show');
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add focus effects to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Payment option selection
    const paymentOptions = document.querySelectorAll('.payment-option:not(.disabled)');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            paymentOptions.forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to clicked option
            this.classList.add('active');
        });
    });
}

// Add shake animation to CSS
const shakeStyles = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.shake {
    animation: shake 0.5s;
}
`;

// Add shake styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = shakeStyles;
document.head.appendChild(styleSheet);

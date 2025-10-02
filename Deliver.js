// Set current date and delivery date
document.addEventListener('DOMContentLoaded', function() {
  // Set current date
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('current-date').textContent = currentDate.toLocaleDateString('en-US', options);
  
  // Set delivery date (3 days from now)
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 3);
  document.getElementById('delivery-date').textContent = deliveryDate.toLocaleDateString('en-US', options);
  
  // Trigger tick animation
  triggerTickAnimation();
  
  // Add subtle animation to elements as they appear
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const elementsToAnimate = document.querySelectorAll('.thank-you-card, .testimonial-card');
  elementsToAnimate.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
  
  // Add click effect to buttons
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Function to trigger the tick animation
function triggerTickAnimation() {
  const checkmark = document.querySelector('.checkmark');
  const checkmarkCircle = document.querySelector('.checkmark-circle');
  const checkmarkCheck = document.querySelector('.checkmark-check');
  
  // Reset animations
  checkmark.style.animation = 'none';
  checkmarkCircle.style.animation = 'none';
  checkmarkCheck.style.animation = 'none';
  
  // Trigger reflow
  void checkmark.offsetWidth;
  void checkmarkCircle.offsetWidth;
  void checkmarkCheck.offsetWidth;
  
  // Restart animations with delays
  checkmark.style.animation = 'checkmarkEntrance 0.8s ease-out 0.5s forwards';
  checkmarkCircle.style.animation = 'stroke-checkmark 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards';
  checkmarkCheck.style.animation = 'stroke-checkmark 0.5s cubic-bezier(0.65, 0, 0.45, 1) 1.2s forwards';
  
  // Add pulsing effect after animation completes
  setTimeout(() => {
    checkmark.style.animation += ', pulseTick 2s ease-in-out 3s infinite';
  }, 2000);
}

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .btn-primary, .btn-secondary {
    position: relative;
    overflow: hidden;
  }
  
  /* Additional tick animation for continuous effect */
  @keyframes pulseTick {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
`;
document.head.appendChild(style);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  navToggle.classList.toggle('toggle-active');
});
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '') {
      alert('Please enter your name');
      return;
    }
    
    if (email === '' || !email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (message === '') {
      alert('Please tell us about your project');
      return;
    }
    
    alert('Thanks! Message ready to send. We’ll contact you soon.');
    contactForm.reset();
  });
}
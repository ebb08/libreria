document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
      document.getElementById('responseMessage').textContent = 'Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.';
      document.getElementById('contactForm').reset(); // Limpiar el formulario
  } else {
      document.getElementById('responseMessage').textContent = 'Por favor, completa todos los campos.';
  }
});

const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      console.log('Nombre:', name);
      console.log('Email:', email);
});
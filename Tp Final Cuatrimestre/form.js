function validarFormulario() {
  // Obtenemos los valores ingresados en los campos
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var comentarios = document.getElementById('comentarios').value;

  // Validamos que los campos no estén vacíos
  if (nombre === '' || email === '' || telefono === '' || comentarios === '') {
    alert('Por favor, completa todos los campos.');
    return false;
  }

  // Validamos el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return false;
  }

  // Validamos que el teléfono sea un número válido
  var telefonoRegex = /^\d+$/;
  if (!telefonoRegex.test(telefono)) {
    alert('Por favor, ingresa un número de teléfono válido.');
    return false;
  }

  // Mostramos los datos ingresados por consola
  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Teléfono:', telefono);
  console.log('Comentarios:', comentarios);

  return true;
}
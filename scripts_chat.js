
// Función para generar un color aleatorio
function generarColor() {
  var letras = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Mapa para almacenar los colores de los usuarios
var coloresUsuarios = {};

// Inicializar los mensajes desde localStorage o una lista vacía si no hay ninguno
var mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];

function enviarMensaje() {
  var nombre = document.getElementById('nombre').value;
  var mensaje = document.getElementById('mensaje').value;

  // Asegurarse de que tanto el nombre como el mensaje están rellenos
  if (nombre && mensaje) {
      // Si el usuario aún no tiene un color asignado, generar uno para él
      if (!coloresUsuarios[nombre]) {
          coloresUsuarios[nombre] = generarColor();
      }
      
      mensajes.push({nombre: nombre, mensaje: mensaje, color: coloresUsuarios[nombre]});
      // Actualizar localStorage con la lista de mensajes actualizada
      localStorage.setItem('mensajes', JSON.stringify(mensajes));
      mostrarMensajes();
  }

  // Limpiar el campo del mensaje
  document.getElementById('mensaje').value = '';
}

function mostrarMensajes() {
  var contenedorMensajes = document.getElementById('mensajes');
  contenedorMensajes.innerHTML = '';
  for (var i = 0; i < mensajes.length; i++) {
      // Añadir cada mensaje al contenedor de mensajes
      contenedorMensajes.innerHTML += '<p><b style="color:' + mensajes[i].color + '">' + mensajes[i].nombre + ':</b> ' + mensajes[i].mensaje + '</p>';
  }
  // Hacer que el chat se desplace automáticamente hasta el final cuando se añade un nuevo mensaje
  document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
}
function eliminarMensajes() {
  // Eliminar los mensajes de localStorage
  localStorage.removeItem('mensajes');
  // Limpiar la lista de mensajes
  mensajes = [];
  // Actualizar el contenedor de mensajes
  mostrarMensajes();
}

// Mostrar los mensajes cuando se carga la página
mostrarMensajes();


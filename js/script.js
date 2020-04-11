  // Variables Globales
  var tiempo = {};
  var dia = 12;
  var hora = 10;

  var clock = new Date("2020-04-12 10:00:30 AM "); // Obtener la fecha y almacenar en clock
  var intervalo = window.setInterval(mostrar_hora, 1); // Frecuencia de actualización
  var i = 0; // Esta variable me ayudará a definir los estados de intervalo

  function mostrar_hora() {
      var now = new Date();
      // Inserta la hora almacenada en clock en el span con id hora
      tiempo.dia = document.getElementById('dia');
      tiempo.dia.innerHTML = dia - now.getDate() - 1;
      // Inserta la hora almacenada en clock en el span con id hora
      tiempo.horas = document.getElementById('hora');
      tiempo.horas.innerHTML = 24 - now.getHours();

      // Inserta los minutos almacenados en clock en el span con id minuto
      tiempo.minuto = document.getElementById('minuto');
      tiempo.minuto.innerHTML = 60 - now.getMinutes();

      // Inserta los segundos almacenados en clock en el span con id segundo
      tiempo.segundos = document.getElementById('segundo')
      tiempo.segundos.innerHTML = 60 - now.getSeconds();

  }
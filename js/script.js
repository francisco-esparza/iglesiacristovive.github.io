  // Variables Globales
  var tiempo = {};
  var dia = 21;
  var hora = 10;

  var clock = new Date("2020-04-21 10:00:30 AM "); // Obtener la fecha y almacenar en clock
  var intervalo = window.setInterval(mostrar_hora, 1); // Frecuencia de actualización
  var i = 0; // Esta variable me ayudará a definir los estados de intervalo

  function mostrar_hora() {
      var now = new Date();
      // Inserta la hora almacenada en clock en el span con id hora
      tiempo.dia = document.getElementById('dia');
      var resultdia = dia - now.getDate() - 1;
      if (resultdia < 10) {
          tiempo.dia.innerHTML = "0" + resultdia;
      } else {
          tiempo.dia.innerHTML = resultdia;
      }

      // Inserta la hora almacenada en clock en el span con id hora
      tiempo.horas = document.getElementById('hora');
      var resulthora = 24 - now.getHours();

      if (resulthora < 10) {
          tiempo.horas.innerHTML = "0" + resulthora;
      } else {
          tiempo.horas.innerHTML = resulthora;
      }


      // Inserta los minutos almacenados en clock en el span con id minuto
      tiempo.minuto = document.getElementById('minuto');
      var resultminuto = 60 - now.getMinutes();

      if (resultminuto < 10) {
          tiempo.minuto.innerHTML = "0" + resultminuto;
      } else {
          tiempo.minuto.innerHTML = resultminuto;
      }


      // Inserta los segundos almacenados en clock en el span con id segundo
      tiempo.segundos = document.getElementById('segundo')
      var resultsegundo = 60 - now.getSeconds();

      if (resultsegundo < 10) {
          tiempo.segundos.innerHTML = "0" + resultsegundo;
      } else {
          tiempo.segundos.innerHTML = resultsegundo;
      }



  }


  const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  const fragment = document.createDocumentFragment();
  const grid = [17, 17];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row;

  for (let i = 0; i < numberOfElements; i++) {
      fragment.appendChild(document.createElement('div'));
  }

  staggerVisualizerEl.appendChild(fragment);

  const staggersAnimation = anime.timeline({
          targets: '.stagger-visualizer div',
          easing: 'easeInOutSine',
          delay: anime.stagger(50),
          loop: true,
          autoplay: false
      })
      .add({
          translateX: [
              { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'x' }) },
              { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'x' }) }
          ],
          translateY: [
              { value: anime.stagger('-.1rem', { grid: grid, from: 'center', axis: 'y' }) },
              { value: anime.stagger('.1rem', { grid: grid, from: 'center', axis: 'y' }) }
          ],
          duration: 1000,
          scale: .5,
          delay: anime.stagger(100, { grid: grid, from: 'center' })
      })
      .add({
          translateX: () => anime.random(-10, 10),
          translateY: () => anime.random(-10, 10),
          delay: anime.stagger(8, { from: 'last' })
      })
      .add({
          translateX: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'x' }),
          translateY: anime.stagger('.25rem', { grid: grid, from: 'center', axis: 'y' }),
          rotate: 0,
          scaleX: 2.5,
          scaleY: .25,
          delay: anime.stagger(4, { from: 'center' })
      })
      .add({
          rotate: anime.stagger([90, 0], { grid: grid, from: 'center' }),
          delay: anime.stagger(50, { grid: grid, from: 'center' })
      })
      .add({
          translateX: 0,
          translateY: 0,
          scale: .5,
          scaleX: 1,
          rotate: 180,
          duration: 1000,
          delay: anime.stagger(100, { grid: grid, from: 'center' })
      })
      .add({
          scaleY: 1,
          scale: 1,
          delay: anime.stagger(20, { grid: grid, from: 'center' })
      })

  staggersAnimation.play();
const redLight = document.getElementById('red');
  const yellowLight = document.getElementById('yellow');
  const greenLight = document.getElementById('green');
  const car = document.querySelector('.car');

  function stopCar() {
    car.style.left = '50%';
  }

  function moveCar() {
    car.style.left = '90%';
  }

  function changeLights() {
    stopCar();
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';
    setTimeout(function() {
      redLight.style.backgroundColor = 'gray';
      yellowLight.style.backgroundColor = 'yellow';
      setTimeout(function() {
        yellowLight.style.backgroundColor = 'gray';
        greenLight.style.backgroundColor = 'green';
        moveCar();
      }, 2000);
    }, 2000);
  }

  setInterval(changeLights, 5000);
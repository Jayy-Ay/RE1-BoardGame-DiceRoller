(function () {
  'use strict';

  var dice = document.getElementById('dice');
  var emptyState = document.getElementById('empty-state');
  var count = document.getElementById('dice-count');

  function updateCount() {
    var number = dice.children.length;
    count.textContent = number + (number === 1 ? ' die' : ' dice');
    emptyState.style.display = number ? 'none' : '';
  }

  function rollDie(die) {
    var color = die.getAttribute('data-color');
    var faces = DICE_FACES[color];
    var index = Math.floor(Math.random() * faces.length);
    var face = faces[index];
    var result = document.createElement('span');

    result.className = 'face-result';
    if (face.image) {
      var image = document.createElement('img');
      image.src = face.image;
      image.alt = '';
      result.appendChild(image);
    } else {
      result.textContent = face.symbol;
    }

    die.textContent = '';
    die.appendChild(result);
    die.setAttribute('data-face-index', index);
    die.setAttribute('aria-label', color + ' die: ' + face.label + '. Activate to remove.');
  }

  function addDie(color) {
    var die = document.createElement('button');
    die.type = 'button';
    die.className = 'die ' + color + '-die';
    die.setAttribute('data-color', color);
    die.addEventListener('mousemove', function (event) {
      var box = die.getBoundingClientRect();
      var x = (event.clientX - box.left) / box.width - .5;
      var y = (event.clientY - box.top) / box.height - .5;
      die.querySelector('.face-result').style.transform = 'perspective(220px) rotateX(' + (-y * 18) + 'deg) rotateY(' + (x * 18) + 'deg)';
      die.style.setProperty('--shine-x', (50 + x * 100) + '%');
      die.style.setProperty('--shine-y', (50 + y * 100) + '%');
    });
    die.addEventListener('mouseleave', function () {
      die.querySelector('.face-result').style.transform = '';
    });
    die.addEventListener('click', function () {
      dice.removeChild(die);
      updateCount();
    });
    rollDie(die);
    dice.appendChild(die);
    updateCount();
  }

  document.getElementById('add-red').addEventListener('click', function () { addDie('red'); });
  document.getElementById('add-blue').addEventListener('click', function () { addDie('blue'); });
  document.getElementById('roll').addEventListener('click', function () {
    var allDice = dice.children;
    for (var i = 0; i < allDice.length; i++) rollDie(allDice[i]);
  });
  document.getElementById('clear').addEventListener('click', function () {
    dice.textContent = '';
    updateCount();
  });
}());

'use strict';

(function () {
  'use strict';

  var words = [{ 'en': 'read', 'ja': '読む' }, { 'en': 'write', 'ja': '書く' }, { 'en': 'eat', 'ja': '食べる' }, { 'en': 'run', 'ja': '走る' }, { 'en': 'walk', 'ja': '歩く' }];

  var card = document.getElementById('js-card');
  var cardFront = document.getElementById('js-card__front');
  var cardBack = document.getElementById('js-card__back');
  var btn = document.getElementById('js-btn');

  card.addEventListener('click', function (e) {
    flip();
  });

  btn.addEventListener('click', function (e) {
    next();
  });

  window.addEventListener('keyup', function (e) {
    // e.keyCode
    // f: 70
    // n: 78
    if (e.keyCode === 70) {
      flip();
    } else if (e.keyCode === 78) {
      next();
    }
  });

  function flip() {
    if (card.classList.contains('card--open')) {
      card.classList.remove('card--open');
    } else {
      card.classList.add('card--open');
    }
  }

  function next() {
    if (card.classList.contains('card--open')) {
      // カードをひっくり返すときに裏が先に見えてしまうのを防ぐ
      card.addEventListener('transitionend', setCard);
      flip();
    } else {
      setCard();
    }
  }

  function setCard() {
    var num = Math.floor(Math.random() * words.length);
    cardFront.textContent = words[num]['en'];
    cardBack.textContent = words[num]['ja'];
    card.removeEventListener('transitionend', setCard);
  }

  setCard();
})();
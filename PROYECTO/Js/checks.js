var miCheckbox = document.getElementById('miElementoCheckbox');
  var msg = document.getElementById('msg');

  

  miCheckbox.addEventListener('click', function() {
    if(miCheckbox.checked) {
      msg.innerText = 'Ok!';
    } else {
      msg.innerText = '';
    }
  });

  var miCheckbox2 = document.getElementById('miElementoCheckbox2');
  var msg2 = document.getElementById('msg2');

  

  miCheckbox2.addEventListener('click', function() {
    if(miCheckbox2.checked) {
      msg2.innerText = 'Ok!';
    } else {
      msg2.innerText = '';
    }
  });
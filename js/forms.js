'use strict';
if (document.forms[0]) {
  const form = document.querySelector('form');
  const resetButton = document.querySelector(
    "form > fieldset > span#buttons > button[type='reset']"
  );
  form.addEventListener('submit', (event) => {
    backdrop.style.display = 'block';
    box.style.display = 'block';
    backdrop.style.pointerEvents = 'all';
    box.style.pointerEvents = 'all';
    box.insertAdjacentHTML(
      'beforeend',
      `<p><i class="fa-li fa fa-spinner fa-spin"></i></p>`
    );
    setTimeout(() => {
      box.innerHTML = '';
      swal('Èxit', 'Formulari enviat correctament', 'success', {
        button: 'OK',
      }).then(() => {
        backdrop.style.display = 'none';
        box.style.display = 'none';
      });
    }, 500);
  });
  resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    backdrop.style.display = 'block';
    backdrop.style.pointerEvents = 'all';
    swal({
      title: 'Estàs segur?',
      text: 'Una vegada reinicies el formulari perdràs les dades introduïdes',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        form.reset();
        swal('Formulari reiniciat', {
          icon: 'success',
        }).then(() => {
          backdrop.style.display = 'none';
          box.style.display = 'none';
        });
      } else {
        swal('El teu formulari està intacte').then(() => {
          backdrop.style.display = 'none';
          box.style.display = 'none';
        });
      }
    });
  });
}

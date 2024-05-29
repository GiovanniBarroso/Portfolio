'use strict';

(function () {

    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

document.getElementById('confirmButton').addEventListener('click', function () {
    let form = document.getElementById('contactForm');
    if (form.checkValidity()) {
        let modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
        modal.hide();

        let alerta = document.getElementById('alerta');
        alerta.classList.remove('d-none');

        form.reset();
        form.classList.remove('was-validated');
        setTimeout(function () {
            alerta.classList.add('d-none');
        }, 5000);
    } else {
        let modal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
        modal.hide();
        form.classList.add('was-validated');

        let alerta2 = document.getElementById('alerta2');
        alerta2.classList.remove('d-none');
        setTimeout(function () {
            alerta2.classList.add('d-none');
        }, 5000);

    }
});

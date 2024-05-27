// Simulación de envío de formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('successMessage').classList.remove('d-none');
});

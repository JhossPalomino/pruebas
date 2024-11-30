// Validar los campos al perder el foco
document.getElementById('nombre').addEventListener('blur', function() {
    validateField('nombre', 'nombreError', 'Por favor, ingresa tu nombre.');
});
document.getElementById('apellido').addEventListener('blur', function() {
    validateField('apellido', 'apellidoError', 'Por favor, ingresa tu apellido.');
});
document.getElementById('correo').addEventListener('blur', function() {
    validateField('correo', 'correoError', 'Por favor, ingresa un correo electrónico válido.', validateEmail);
});
document.getElementById('numero').addEventListener('blur', function() {
    validateField('numero', 'numeroError', 'Por favor, ingresa un número telefónico válido.', validatePhoneNumber);
});
document.getElementById('motivo').addEventListener('blur', function() {
    validateField('motivo', 'motivoError', 'Por favor, ingresa un comentario o pregunta.');
});

function validateField(fieldId, errorId, errorMessage, validationFunction) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const errorElement = document.getElementById(errorId);

    if (!value || (validationFunction && !validationFunction(value))) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = '';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhoneNumber(number) {
    const re = /^\d{10}$/; // Asegura que el número tenga 10 dígitos
    return re.test(number);
}

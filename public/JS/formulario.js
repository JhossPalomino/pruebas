
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado y analizado');
    
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío predeterminado del formulario
        console.log('Evento submit interceptado');
        
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const numero = document.getElementById('numero').value;
        const motivo = document.getElementById('motivo').value;
        
        console.log('Datos del formulario:', { nombre, apellido, correo, numero, motivo });
        
        axios.post('http://localhost:4001/enviar', {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            numero: numero,
            motivo: motivo
        })
        .then(response => {
            console.log('Respuesta del servidor:', response);
            Swal.fire({ 
                title: `Hecho`, 
                text: `datos enviados correctamente al servidor`,
                icon: 'success', 
                confirmButtonText: 'Está bien', 
                background: '#f9f9f9', 
                backdrop: `rgba(0, 0, 0, 0.4) url("https://cdn.jsdelivr.net/gh/limonte/sweetalert2@7.33.1/underline-2.gif") left top no-repeat` 
            });
        })
        .catch(error => {
            console.error('Error enviando los datos:', error);
        });
    });
});

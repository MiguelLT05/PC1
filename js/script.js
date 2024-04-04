document.addEventListener('DOMContentLoaded', function() {
    const professionals = [
        { name: 'Luis Morales', field: 'Ingeniería Civil' },
        { name: 'Sofía Carrasco', field: 'Ingeniería de Sistemas' },
        { name: 'Diego Fernández', field: 'Ingeniería Industrial' },
        { name: 'Camila Gutierrez', field: 'Ingeniería Ambiental' },
        { name: 'Josefina Velasco', field: 'Ingeniería Química' }
    ];

    const professionalList = document.getElementById('professionalList');
    
    professionals.forEach(professional => {
        const item = document.createElement('div');
        item.classList.add('professional-card');
        item.innerHTML = `
            <span class="professional-details">${professional.name} - ${professional.field}</span>
            <button class="btn-hire" onclick="hireProfessional(this)">Contratar</button>
            <div class="success-alert">Contratado</div>
        `;
        professionalList.appendChild(item);
    });
});

function hireProfessional(button) {
    const successAlert = button.nextElementSibling;
    successAlert.style.display = 'block';
    setTimeout(() => { successAlert.style.display = 'none'; }, 3000);
    button.textContent = 'Contratado';
    button.disabled = true;
}

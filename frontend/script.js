const select = document.getElementById('vehiculoSelect');
const table = document.getElementById('vehiculoTable');
const tbody = table.querySelector('tbody');

// Funcion para obtener y mostrar datos del vehiculo
function cargarVehiculo(id) {
    fetch(`http://localhost:5000/api/vehiculo/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data && data.ID) {
                table.style.display = 'table';
                tbody.innerHTML = `
                    <tr>
                        <td>${data.ID}</td>
                        <td>${data.Marca}</td>
                        <td>${data.Motor}</td>
                        <td>${data.Cilindraje}</td>
                    </tr>`;
            } else {
                tbody.innerHTML = `<tr><td colspan="4">Vehículo no encontrado</td></tr>`;
                table.style.display = 'table';
            }
        })
        .catch(error => {
            tbody.innerHTML = `<tr><td colspan="4">Error al obtener los datos</td></tr>`;
            table.style.display = 'table';
        });
}

// Cargar automaticamente el primer vehiculo al abrir la pagina
cargarVehiculo(select.value);

// Escuchar cambios en el dropdown
select.addEventListener('change', () => {
    cargarVehiculo(select.value);
});

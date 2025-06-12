#  Prueba Técnica 2025-1 - Technical Developer

**Autor:** Javier Gomez
**Fecha:** 11/06/2025

## Descripción del Proyecto
Este proyecto es una aplicación web full-stack desarrollada como parte de la prueba técnica 2025-1 para el cargo de Technical Developer en Bendita Essence.

Permite al usuario seleccionar uno de tres vehículos desde un menú desplegable (dropdown), y visualizar su información completa en una tabla HTML. El sistema está dividido en dos capas principales:

Backend (Flask): Exposición de un endpoint REST que devuelve la información de los vehículos.
Frontend (HTML, CSS, JS): Interfaz de usuario interactiva y moderna sin uso de frameworks.

## Estructura de Carpetas y Arquitectura del Código
prueba-tecnica-bendita/
├── backend/
│   ├── app.py           # Servidor Flask con endpoint REST GET /api/vehiculo/<id>
│   └── venv/            # Entorno virtual de Python (no se sube a GitHub)
│
├── frontend/
│   ├── index.html       # Estructura de la interfaz de usuario
│   ├── style.css        # Estilos visuales modernos
│   └── script.js        # Lógica JS que conecta con el backend vía fetch
│
├── README.md 

## Instrucciones para clonar, instalar y ejecutar
1. Clonar el repositorio
git clone https://github.com/Chili05(o tu usuario)/prueba-tecnica-bendita.git
cd prueba-tecnica-bendita

2. Ejecutar el Backend (Flask)
cd backend (entrar a la carpeta backend en la terminal) 
python -m venv venv
source venv/bin/activate       En Windows: venv\Scripts\activate
pip install flask flask-cors
python app.py

3. Ejecutar el Frontend
cd ../frontend
Abre el archivo index.html en tu navegador (doble clic o arrástralo al navegador).
Al seleccionar un vehículo, verás la tabla actualizarse con los datos desde el backend.



## 🧑‍💻 Autor

**Javier Gomez**  
💼 Candidato a Technical Developer  
📧 javierestebangomez3gmail.com  
🔗 [GitHub](https://github.com/Chili05)
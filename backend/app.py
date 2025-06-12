from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir peticiones desde frontend (localhost)

# Datos simulados con la estructura de la API de ejemplo
vehiculos = [
    {
        "ID": "1",
        "Marca": "Kawasaki",
        "Motor": "Kawasaki bicilindrico",
        "Cilindraje": "500"
    },
    {
        "ID": "2",
        "Marca": "Yamaha",
        "Motor": "Yamaha monocilíndrico",
        "Cilindraje": "300"
    },
    {
        "ID": "3",
        "Marca": "Honda",
        "Motor": "Honda bicilíndrico",
        "Cilindraje": "400"
    }
]

@app.route('/api/vehiculo/<id>', methods=['GET'])
def obtener_vehiculo(id):
    vehiculo = next((v for v in vehiculos if v['ID'] == id), None)
    if vehiculo:
        return jsonify(vehiculo)
    return jsonify({"error": "Vehículo no encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True)

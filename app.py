from flask import Flask, request, jsonify
from services.document_check import verify_document
from services.rib_check import verify_rib

app = Flask(__name__)

# Route pour vérifier une pièce d'identité
@app.route('/verify-document', methods=['POST'])
def verify_document_route():
    file = request.files.get('document')
    if not file:
        return jsonify({"error": "Aucun fichier fourni"}), 400
    result = verify_document(file)
    return jsonify(result)

# Route pour vérifier un RIB
@app.route('/verify-rib', methods=['POST'])
def verify_rib_route():
    data = request.json
    if not data or 'rib' not in data:
        return jsonify({"error": "Données invalides"}), 400
    result = verify_rib(data['rib'], data.get('name'))
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

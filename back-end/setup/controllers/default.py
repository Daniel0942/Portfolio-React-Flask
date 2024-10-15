from setup import app
from flask import request, jsonify
from setup.models.table import conexao

@app.route("/")
def index():
    return "Back-end do Porfólio"

# retornar o banco de dados em json para o front-end fazer requisições
@app.route("/api")
def json():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("SELECT * FROM users")
    tabela_users = cursor.fetchall()
    return jsonify(tabela_users)

@app.route("/api", methods=["POST"])
def receberDados():
    novaMsg = request.get("novaMSg")
    

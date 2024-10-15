from setup import app
from flask import request, jsonify
from setup.models.table import conexao

@app.route("/")
def index():
    return "Back-end do Porfólio"

# retornar o banco de dados em json para o front-end fazer requisições
@app.route("/api")
def converter():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("SELECT * FROM users")
    tabela_users = cursor.fetchall()
    return jsonify(tabela_users)

# Pegar dados que o Front-end Mandou pra cá, e enviar para o Banco de dados
@app.route("/api", methods=["POST"])
def receberDados():
    # receber dados do cliente em formato json
    novaMsg = request.get_json()
    # extrair dados
    nome =  novaMsg.get("nome")
    email = novaMsg.get("email")
    contato = novaMsg.get("contato")
    msg = novaMsg.get("msg")
    # enviar dados para o banco de dados
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("INSERT INTO users (nome, email, contato, msg) VALUES (?, ?, ?, ?)", (nome, email, contato, msg))
    conectar.commit()
    conectar.close()
    # Retornar a nova tarefa criada com status 201 (Criado)
    nova_tarefa = {
        "id": cursor.lastrowid,  # Pega o ID da última tarefa inserida
        "name": nome,
        "msg": msg
    }
    return jsonify(nova_tarefa), 201

    

import sqlite3

def conexao():
    conectar = sqlite3.connect("Formulario.db") # especifiquei o diretório
    return conectar

def criarTabela():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    contato INTEGER NOT NULL,
    msg TEXT)""")
    conectar.commit()
    conectar.close()

def apagarDados(id):
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("DELETE FROM users WHERE id = ? ", (id,))
    conectar.commit()
    conectar.close()

def inserirDados():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("INSERT INTO users (nome, email, contato, msg) VALUES (?, ?, ?, ?)", ("Lili", "lili49@gmail.com", 7934424423, "Testando projeto novo"))
    conectar.commit()
    conectar.close()


#criarTabela()
#apagarDados(1)
#inserirDados()
import sqlite3

def conexao():
    conectar = sqlite3.connect("Formulario.db")
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

#criarTabela()
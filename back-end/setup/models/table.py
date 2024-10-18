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

def apagarDados(id):
    conectar = conexao()
    cursor = conectar.cursor()
    try:
        cursor.execute("DELETE FROM users WHERE id = ? ", (id,))
        conectar.commit()
    except Exception as e:
        print(f"Ocorreu ao deletar: {e}")
        conectar.rollback()
    finally:
        conectar.close()

def inserirValores():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("INSERT INTO users (nome, email, contato, msg) VALUES (?, ?, ?, ?)", ("João", "Teste431gmail.com", 79993231, "Testando SQLite3 no flask"))
    conectar.commit()
    conectar.close()

#criarTabela()
#criarTabela()
#apagarDados(1)
inserirValores()
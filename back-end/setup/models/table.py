import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

def conexao():              
    conectar = mysql.connector.connect(
        host = os.getenv("host"),
        user = os.getenv("user"),
        password = os.getenv("password"),
        database = os.getenv("database"),
        port = int(os.getenv("port"))
    ) 
    return conectar

def criarTabela():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS clientes (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        contato INT NOT NULL,
        msg TEXT)
    """)
    conectar.commit()
    conectar.close()

def apagarDados(id):
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("DELETE FROM clientes WHERE id = %s ", (id,))
    conectar.commit()
    conectar.close()

def inserirDados():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("INSERT INTO users (nome, email, contato, msg) VALUES (%s, %s, %s, %s)", ("Lili", "lili49@gmail.com", 7934424423, "Testando projeto novo"))
    conectar.commit()
    conectar.close()

#criarTabela()
#apagarDados(3)
#inserirDados()
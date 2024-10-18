import mysql.connector
#import os
#from dotenv import load_dotenv  # biblioteca que carrega variável de ambiente

#load_dotenv()

# conexão com o banco do Railway
def conexao():
    try:
        conectar = mysql.connector.connect(
            host = "mysql-68ec7f9b.railway.internal",
            user = "root",
            password = "uVxBYgNVWdFtRjWltteYsXrKVZRomvxo",
            database = "railway"
        )
        print("conexão bem sucedida")
        return conectar
    except Exception as e:
        print(str(e))

def inserirValores():
    conectar = conexao()
    cursor = conectar.cursor()
    comando = "INSERT INTO formulario(nome, email, contato, msg) VALUES (%s, %s, %s, %s)"
    dados = "daniel", "danielufc131@gmial.com", 79991145560, "Gostaria de fazer um projeto"
    cursor.execute(comando, dados)
    conectar.commit()
    cursor.close()
    conectar.close()

def mostrarTudo():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("SELECT * FROM formulario")
    tudo = cursor.fetchall()
    for c in tudo:
        print(c)
    cursor.close()
    conectar.close()

def apagar(id):
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("DELETE FROM formulario WHERE id = %s", (id,))
    conectar.commit()
    cursor.close()
    conectar.close()

#inserirValores()
#mostrarTudo()
#apagar(4)
conexao()

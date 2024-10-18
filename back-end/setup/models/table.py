import mysql.connector

# abrindo conexões
def conexao():
    conectar = mysql.connector.connect(
        host = "localhost",
        user = "root",
        password = "0942",
        database = "portfolio"
    )
    return conectar

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
#apagar(2)
from dotenv import load_dotenv # biblioteca que carrega variável de ambiente
import os 
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def enviarEmail(nome, email, contato, msg):
    load_dotenv()  # Carrega variáveis de ambiente do .env localmente (não afeta a produção)
    Key = os.getenv("SENDGRID_KEY")

    # Primeiro email do remetente, depois o email do destinatário
    email_msg = Mail(from_email="danieldev6102@hotmail.com", to_emails="danielufc131@gmail.com",
    subject="Novo mensagem recebida", # Assunto
    html_content=f"""
    <h1>Mensagem Nova</h1>
    <p>O nome: {nome}</p>
    <p>O e-mail: {email}</p>
    <p>O contato: {contato}</p>
    <p>A mensagem: {msg}</p>
    """)  # Mensagem com Html

    sg = SendGridAPIClient(Key) # autentitacador
    response = sg.send(email_msg) # enviar mensagem
    print("E-mail enviado !")
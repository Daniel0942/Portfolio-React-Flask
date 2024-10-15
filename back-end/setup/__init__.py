from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": ["http://localhost:3000", "https://portfolio-react-flask-two.vercel.app/"],
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

CORS(app, resources={r"/api/*": {
    "origins": ["http://localhost:3000", "https://portfolio-react-flask-two.vercel.app"],
    "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})
from setup.controllers import default

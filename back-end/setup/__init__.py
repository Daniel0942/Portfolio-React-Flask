from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {
    "origins": ["http://localhost:3000", "https://portfolio-react-flask-two.vercel.app/"],
    "methods": ["POST"],
    "allow_headers": ["Content-Type", "Authorization"]
}})

from setup.controllers import default

from flask import Blueprint

app = Blueprint(__name__, __name__)

@app.route('/', methods=['GET'])
@app.route('', methods=['GET'])
def index ():
	return 'Hello WeMeet'

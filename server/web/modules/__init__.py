from flask import Flask
import os

class ENV:
	APP_CONFIG_FILE = "FLASK_CONFIG_FILE"

app_dir = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

app.config.from_pyfile(os.path.abspath(os.environ[ENV.APP_CONFIG_FILE]), silent=False)


from index import app as index
app.register_blueprint(index, url_prefix='/index')
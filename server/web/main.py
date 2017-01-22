from modules import app, ENV

if __name__ == '__main__':
    app.is_running_local_dev = True
    app.run(host='0.0.0.0', port=app.config['PORT'])
from flask import Flask
from fabric import connection
import os

from fabric import task

# Update here⬇️
remote_host = 'your_remote_host'
remote_user = 'your_remote_user'
remote_path = '/path/to/remote/directory'

# Update here⬇️
@task
def deploy(c):
    upload_files(c)         # Upload HTML and CSS files
    upload_flask_app(c)     # Upload Flask app
    restart_web_server(c)   # Restart the web server

# Upload HTML and CSS and images files to the remote server
def upload_files(c):
    c.put('./Front-end/Sub_Admin/Template/index.html', remote_path)  # Upload index.html
    c.put('./Front-end/CSS/styles.css', remote_path)                # Upload styles.css
    c.put('./Front-end/static/images', remote_path)

# Upload Flask app to the remote server
def upload_flask_app(c):
    c.put('./path/to/your/flask_app.py', remote_path)  # Upload your Flask app script

# Task to restart the web server
@task
def restart_web_server(c):
    # Restart web server if needed (adjust command based on your server)
    c.run('sudo systemctl restart nginx')

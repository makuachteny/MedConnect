from fabric import task, Connection
import os

remote_host = 'your_remote_host'
remote_user = 'your_remote_user'
remote_path = '/path/to/remote/directory'

@task
def deploy(c):
    upload_files(c)
    upload_flask_app(c)
    restart_web_server(c)

def upload_files(c):
    c.put('./Front-end/Sub_Admin/Template/index.html', remote_path)
    c.put('./Front-end/CSS/styles.css', remote_path)
    c.put('./Front-end/static/images', remote_path, recursive=True)

def upload_flask_app(c):
    c.put('./path/to/your/flask_app.py', remote_path)

@task
def restart_web_server(c):
    try:
        c.sudo('systemctl restart nginx', pty=True)  # Use pty=True for interactive sudo prompts
    except Exception as e:
        print(f"Error restarting web server: {e}")

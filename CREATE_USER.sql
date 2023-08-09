-- Create the new user
CREATE USER 'admin' @'localhost' IDENTIFIED WITH mysql_native_password BY 'Medconnect!';
-- Grant all privileges to the user
GRANT ALL PRIVILEGES ON *.* TO 'admin' @'localhost';
-- Apply changes
FLUSH PRIVILEGES;
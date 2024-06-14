// Importing required modules
const http = require('http'); // Module to create an HTTP server
const fs = require('fs'); // Module to handle file system operations

// Setting the port to environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;
const hostname = "localhost"; // Hostname set to localhost

// Reading the HTML files synchronously and storing their content in variables
const home = fs.readFileSync('./index.html', 'utf-8');
const about = fs.readFileSync('./about.html', 'utf-8');
const contact = fs.readFileSync('./contact.html', 'utf-8');
const service = fs.readFileSync('./service.html', 'utf-8');

// Creating the HTTP server
const server = http.createServer((req, res) => {
    // Setting the response header content type to text/html
    res.setHeader('Content-Type', 'text/html');

    // Routing based on the URL path
    if (req.url === "/") {
        // Serve home page
        return res.end(home);
    }
    if (req.url === "/about") {
        // Serve about page
        return res.end(about);
    }
    if (req.url === "/contact") {
        // Serve contact page
        return res.end(contact);
    }
    if (req.url === "/service") {
        // Serve service page
        return res.end(service);
    } else {
        // Serve 404 error page for unknown routes
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

// Starting the server and listening on the specified port
server.listen(PORT, () => {
    console.log(`server is working on http://${hostname}:${PORT}`);
});

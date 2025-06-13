// Simple HTTP server for running Father's Day website on port 3000
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// MIME type mapping
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
    // Get requested file path
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, filePath);
    
    // Get file extension
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'text/plain';
    
    // Read file and respond
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found, return 404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1><p>Please make sure you are accessing the correct path</p>');
            } else {
                // Server error
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1>');
            }
        } else {
            // Successfully read file, return content
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`🎉 Father's Day Gift Website is now running!`);
    console.log(`🌐 Access URL: http://localhost:${port}`);
    console.log(`💝 Ready to help you find the perfect gift for your dad!`);
});

// Graceful server shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Server is shutting down...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
}); 
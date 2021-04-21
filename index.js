const path = require('path');
const fs = require('fs');
const http = require('http');

// create the server that will serve the note app
const server = http.createServer((request, response) => {
    // create path for file requested, but use / for top-level index.html
    let file_path = path.join(__dirname, 'public', request.url == '/'? 'index.html' : request.url);
    // call function returning content type based on extension
    let content_type = getContentType(file_path) || 'text/html' //logical OR
    // file not found 404 page
    let empty_page_path = path.join(__dirname, 'public', '404.html');
    // read in the file
    fs.readFile(file_path, 'utf8', ((err, content) => {
        // error - file not found - display 404 page
        // error - other error - display 500 server err
        // not error - display retrieved content
        if (err) {
            if (err.code === 'ENOENT') { 
                fs.readFile(empty_page_path, 'utf8', (err, content) => { 
                    response.writeHead(200, {'Content-Type': content_type });
                    response.end(content);
                })
            } 
            else {
                    response.writeHead(500);
                    response.end('A server error has occurred');
                }
            }
        else {
            response.writeHead(200, {'Content-Type': content_type});
            response.end(content);
        }
    }));
});

// this function returns the text name for different file extensions
const getContentType = (filePath) => {
    let extname = path.extname(filePath);
    if (extname === '.js') { return 'text/javascript'; }
    if (extname === '.css') { return 'text/css'; }
    if (extname === '.png') { return 'image/png'; }
    if (extname === '.jpg') { return 'image/jpg'; }
}

// set port and start server
const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
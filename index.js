import http from 'http';

const PORT = 5000;

const server = http.createServer((req, res) => {

    console.log('Method:', req.method);
    console.log('URL:', req.url);

    if (req.method === 'GET' && req.url === '/users') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify([
            { id: 1, name: 'Jitendra' },
            { id: 2, name: 'Rahul' }
        ]));

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Route not found');
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
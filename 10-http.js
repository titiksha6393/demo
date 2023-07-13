const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('This is about Page');
    }
    
    res.end(`
        <h1>Oops!!</h1>
        <p>Error 402</p>
        <h3>Bad Gateway</h3>
        <a href = "/">Home page</a>
    `)
})

server.listen(4000);
const {Client} = require("pg")
const express = require ("express")
const app = express();
app.use(express.json())

const client = new Client({
    "user": "postgres",
    "password" : "1234",
    "host" : "localhost",
    "port" : 5432,
    "database" : "test1"
})


app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))
app.use(express.static(__dirname + '/public'));

app.get("/todos", async (req, res) => {
    const rows = await readTodos();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})



app.post("/todos", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        await createTodo(reqJson.todo)
        result.success= true;
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})





app.delete("/todos", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        await deleteTodo(reqJson.id)
        result.success= true;
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }
   
})


app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

start()

async function start() {
    await connect();
    /*
    const todos = await readTodos();
    console.log(todos)
    const successCreate = await createTodo("Go to trader joes")
    console.log(`Creating was ${successCreate}`)
    const successDelete = await deleteTodo(1)
    console.log(`Deleting was ${successDelete}`)
    */
}

async function connect() {
    try {
        await client.connect();
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

async function readTodos() {
    try {
    const results = await client.query("select id, name from todo");
    return results.rows;
    }
    catch(e){
        return [];
    }
}

async function createTodo(todoText){

    try {
        await client.query("insert into todo (name) values ($1)", [todoText]);
        return true
        }
        catch(e){
            return false;
        }
}



async function deleteTodo(id){

    try {
        await client.query("delete from todo where id = $1", [id]);
        return true
        }
        catch(e){
            return false;
        }
}







// var http = require('http'),
//     fs = require('fs');

// const express = require('express')
// const bodyParser = require('body-parser')
// const app = express()
// const db = require('./queries')

// http.createServer(function (req, res) {

//   app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/todo', db.getUsers)

//     if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

//       fs.readFile('index.html', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//       });

//     }

// app.listen(3000, () => {
//   console.log(`App running on port ${3000}.`)
// })

//     if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

//       fs.readFile('todos.js', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//         res.end();
//       });

//     }

//     if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

//       fs.readFile('queries.js', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//         res.end();
//       });

//     }

//     // if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

//     //   fs.readFile('index.js', function (err, data) {
//     //     if (err) console.log(err);
//     //     res.writeHead(200, {'Content-Type': 'text/javascript'});
//     //     res.write(data);
//     //     res.end();
//     //   });

//     // }


//     if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

//       fs.readFile('assets/css/styles.css', function (err, data) {
//         if (err) console.log(err);
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.write(data);
//         res.end();
//       });

//     }

// }).listen(3000, 'localhost');
// console.log('Server running at http://localhost:3000/');


// app.listen(port, () => {
//     console.log("Hi This port is running");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var router = require('./routes')();
 
// app.use('/api', router);
const express = require('express');
const cors = require('cors');
const conn = require('./db/db_connection');
const routedb = require('./routes/routedb')


const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/v1', routedb);


app.listen(5000, () => {
    console.log('listening on port 5000');
    conn.connect(function(err){
        if(err) throw err;
        console.log('connected');
    })
})
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:5173', //frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};

module.exports = cors(corsOptions)
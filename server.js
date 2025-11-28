const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./src/routes/authRoutes'); 

dotenv.config();

connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 

app.use(express.json()); 

app.use('/api/auth', authRoutes); 

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'API da Pizzaria Italiana rodando!',
        status: 'Online',
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
    console.log(`Acesse a rota principal: http://localhost:${PORT}`);
});
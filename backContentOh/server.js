const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middlewares
app.use(cors());
app.use(express.json());

// Importar el modelo de datos
const Todo = require('./models/Todo');

// Importar las rutas
const todos = require('./routes/Todos');

// Usar las rutas
app.use('/api', todos);

// Puerto en el que el servidor escuchará
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

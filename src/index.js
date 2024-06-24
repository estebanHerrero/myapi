import express from 'express';
import alojamientosRoutes from './routes/alojamientos.routes.js';
import indexRoutes from './routes/index.routes.js';
import {PORT} from  './config.js';


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', alojamientosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })
})

app.listen(PORT)
console.log('Server running on port', PORT)
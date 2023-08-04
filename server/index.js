import express from 'express'
import { routerApi } from "./routes/index.js";
import { logError, handleError, errorBoomHandler } from "./middleware/errorHandler.js";
import { configure } from './config/config.js'
import { configurePassport } from "./utils/auth/index.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

configurePassport();

app.get('/', (req, res) => {
    res.send('hola, bro')
})

routerApi(app);

// middlewares
app.use(logError);
app.use(errorBoomHandler);
app.use(handleError);

app.listen(configure.port, () => {
    console.log(`Escuchando desde el puerto ${configure.port}...`);
});




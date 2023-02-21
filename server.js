import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import productsRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import { Server } from 'socket.io';
import viewRouter from "./routes/views.router.js";
import handlebars from 'express-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api/productos', productsRouter);
app.use('/api/carrito', cartRouter);
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set('view engine', 'handlebars');


app.use("/", viewRouter);

const serverHttp = app.listen(8080, () => {
    console.log('Conectado en el puerto 8080!')
});
serverHttp.on('error', error => console.log(`Error en el servidor: ${error}`));

const httpServer = app.listen(9090, () => {
    
});

const socketServer = new Server(httpServer);
socketServer.on("connection", socket =>{
    console.log("Usuario conectado!");
    socket.on("msg", data => {
        console.log(data);
    });
});

const io = new Server(httpServer);
let messages = [];


export default app;
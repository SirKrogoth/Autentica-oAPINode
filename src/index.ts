import express, { NextFunction, Request, Response } from 'express';
import statusRouter from './routes/status.route';
import userRoute from './routes/uses.route';

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração da rota
app.use(statusRouter);
app.use(userRoute);
app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'API está online!' })
});

//Inicialização do server
app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000.");
})
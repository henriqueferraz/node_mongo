import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mainRouter } from './routes/main';
import helmet from 'helmet';

dotenv.config();

const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable('x-powered-by');
server.use(express.json());

server.use(mainRouter);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
})
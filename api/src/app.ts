import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import { loadApiEndpoints } from './controllers/api';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../../app/build')));

loadApiEndpoints(app);

export default app;

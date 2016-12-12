import 'babel-polyfill';

import express from 'express';
import cors from 'cors';

import v1 from './routes/v1';

const app = express();

const whitelist = [
    'http://localhost:3000'
];

const corsOptions = {
    credentials: true,
    origin: function(origin, callback){
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    }
};


app.use(cors(corsOptions));
app.use('/api/v1', v1);

module.exports = app;

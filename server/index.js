import express from 'express';
const app=express();
import Connection from './Database/db.js';
import DefaultData from './default.js';

const PORT=8000;

Connection();

app.listen(PORT,()=>
{
    console.log(`Server start on port ${PORT}`);
});

DefaultData();
const express=require('express');
const app=express();


const PORT=8000;
app.listen(PORT,()=>
{
    console.log(`Server start on port ${PORT}`);
});


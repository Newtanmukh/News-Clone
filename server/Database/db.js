import mongoose from 'mongoose';


const Connection=async()=>
    {
        const URL=`mongodb+srv://new:abcd1234@cluster0.nyifa.mongodb.net/?retryWrites=true&w=majority`;
        try
        {
            await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology: true});
            console.log(`Database connected successfully.`);
        }
        catch(err)
        {
            console.log(`Error while connecting with the database : `+err);
        }
    }


    export default Connection;
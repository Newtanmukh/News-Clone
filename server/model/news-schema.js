import mongoose from "mongoose";

const newsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    timestamp:{
        type:String,
        required:true
    }
});

//here, the collection name is 'news'.
//const news=mongoose.model("news",newsSchema);
const News=mongoose.model("news",newsSchema);
export default News;

//database is cluster, tables is collection.

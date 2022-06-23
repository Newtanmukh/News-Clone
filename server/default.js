import { data } from './constant/data.js';
import News from './model/news-schema';

const DefaultData=async()=>{
    try
    {
        await News.insertMany(data);//will automatically insert all the data at once.
        console.log(`Data inserted successfully.`);
    }
    catch(err)
    {
        console.log(`Error `,err.message);
    }
}

export default DefaultData;
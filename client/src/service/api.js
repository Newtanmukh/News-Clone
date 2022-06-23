//hit the backend , from where all the data will come.
//for that , we need to do an API call. and for that, we will need to use axios.
//we can use the fetch as well,(which is used in javascript.)

import axios from 'axios';


//we now need to do an API call using axios. however there are chances of Exceptions in that API call.

export const getNews=async()=>{
     const URL='';

    try
    {
      return  await axios.get();
    }
    catch(error)
    {
        console.log(`Error while calling get news api`,error);
    }
};
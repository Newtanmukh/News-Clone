import {Box} from '@mui/material'
//we want that as soon as website loads,the data is fetched and loaded instantly. that is on component mount.
//we can use it using ComponentDidMount(when the component starts being visible to us).
//use useeffect instead.



import { useEffect } from 'react';
//useEffect works ike a function. first is callback function, second is when to call that.
//we want the fucntion to work when the component is inserted to the DOM.


//import the API which calls the data from the backend.
import {getNews} from '../service/api';


const Article=()=>{

    useEffect(()=>
    {
        dailyNews();
    },[]);
    //if we pass empty array,then it will be called once the component mount.


    const dailyNews=async()=>
    {
        let response=await getNews();//this will also return a promise.
    }

    return(
        <Box>

        </Box>
    )
}

export default Article;
import {Box} from '@mui/material'
//we want that as soon as website loads,the data is loaded instantly.
//we can use it using ComponentDidMount(when the component starts being visible to us).
//use useeffect instead.
import { useEffect } from 'react';



const Article=()=>{

    useEffect(()=>{

    },[]);

    return(
        <Box>

        </Box>
    )
}

export default Article;
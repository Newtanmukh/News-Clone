//import components
import Header from './components/Header.jsx';
import InfoHeader from './components/InfoHeader.jsx';
import Article from './components/Articles';

import {Box,styled} from '@mui/material';

const Container=styled(Box)`
width:60%;
margin:30px auto 0 auto;
`

function App() {
  return (
    <Box>
     <Header/>
        <Container>
            <InfoHeader/>
            <Article/>
        </Container>
    </Box>
  );
}

export default App;

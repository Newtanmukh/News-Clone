import {AppBar,Toolbar,styled} from '@mui/material';
import { Menu } from '@mui/icons-material';
//by doing {},we are basically importing them as a component.

//styled is used for playing with the material-ui.



const StyledHeader=styled(AppBar)`
    background:#fff;
    height:70px;

`


//we will have to create as a object for tags.
//NOTE : for objects/tags, always encode the values of the attributes inside strings. like,display : 'flex'. Also, use camelCase for the keys.
const Image=styled('img')({
    height:55,
    margin:'auto',
    paddingRight:70

})



const MenuIcon=styled(Menu)`
color:#000;
`

const Header=()=>{
    const url='https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return(
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo"/>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
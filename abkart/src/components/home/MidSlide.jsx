import { Box,styled } from "@mui/material"
import Slide from "./Slide"


const Component=styled(Box)`
    display:flex;
`;

const LeftComp=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));

const RightComp=styled(Box)(({theme})=>({
    background:'#FFFFFF',
    padding:5,
    marginTop:10,
    marginLeft:10,
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const MidSlide=({products, title, timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Component>
            <LeftComp>
                <Slide 
                products={products}
                title={title}
                timer={timer}
                />

            </LeftComp>

            <RightComp>
                <img src={adURL} alt="ad" style={{width:217}}/>
            </RightComp>
        </Component>
    )
}

export default MidSlide;
import { useState } from "react";
import { Box, Button,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import {payUsingPaytm} from '../../service/api';
import {post} from "../../utils/Paytm";

const LeftContainer=styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}));

const Image = styled('img')({
    padding:'15px',
    width:'90%'
})

const StyledButton=styled(Button)(({theme})=>({
    width:'48%',
    height:50,
    borderradius:2,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}));


const ActionItem = ({product}) => {
    const nav=useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity]=useState(1);

    const { id }=product;

    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity))
        nav('/cart');
    }

    const buyNow = async() => {
        let response = await payUsingPaytm({amount:500 , email: 'arunbalaji211@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response 
        }
        post(information);
    }

    return (
        <LeftContainer>
        <Box style={{ padding:'15px 20px',border:'1px solid #f0f0f0'}}>
            <Image src={product.detailUrl} alt="product"/>
        </Box>
            <StyledButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10, background:'#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
            <a href="https://dashboard.paytm.com/login/">
            <StyledButton variant="contained"  style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</StyledButton>
            </a>
        </LeftContainer>
    )
}

export default ActionItem;
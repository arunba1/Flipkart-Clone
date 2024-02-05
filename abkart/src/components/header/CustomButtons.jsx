import { useState,useContext } from "react";

import { Badge, Box, Button, Typography,styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { DataContext } from "../../context/DataProvider";

import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 2% 0 auto',
    '&> *': {
        marginRight: `40px |important`,
        fontSize:16,
        alignItems:'center',
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const Container=styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));


const LoginButton=styled(Button)`
    color:#2874f0;
    background:#FFFFFF;
    text-transform:none;
    padding:5px 45px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`;

const CustomButtons=()=>{

    const {cartItems} = useSelector(state => state.cart)

    const [open,setopen]=useState(false);

    const {account,setAccount}=useContext(DataContext);

    const openDialog=()=>{
        setopen(true);
    }
    return(
        <Wrapper>
        {
            account? <Profile account={account} setAccount={setAccount}/>:
            <LoginButton variant="contained" onClick={()=>openDialog()} >Login</LoginButton>
        }
            
            &nbsp;&nbsp;
            
            <Typography style={{marginTop:3,width:135}}>Become a Seller&nbsp;&nbsp;</Typography>
            <Typography style={{marginTop:3}} >More</Typography>&nbsp;&nbsp;&nbsp;&nbsp;

            <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>
    )
} 

export default CustomButtons;
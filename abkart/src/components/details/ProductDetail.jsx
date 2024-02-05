import { Typography,Box,styled, Table, TableBody, TableRow, TableCell } from "@mui/material"

import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText=styled(Box)`
    vertical-align:baseline;
    &>p{
        font-size:14px;
        margin-top:10px;
    }
`;

const Badge=styled(LocalOfferIcon)`
    margin-right:10px;
    color:#FF0000;
    font-size:15px;
`;

const ColumnText=styled(TableRow)`
    font-size:14px;
    vertical-align:baseline;
    &>td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`;

const ProductDetail =({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:'#878787', fontSize:14}}>
                8 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} alt="flipkartassuredsticker" style={{width:77, marginLeft:20}}/></Box>
            </Typography>
            <Typography>
                    <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>                        
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
            <Typography><Badge/>Bank Offer 10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
            <Typography><Badge/>Bank Offer 10% off on OneCard Credit Card and EMI Transactions, up to ₹500 on orders of ₹2,000 and above T&C</Typography>
            <Typography><Badge/>Bank Offer 8% off on Yes Bank Credit Card EMI Transactions, up to ₹2,000 on orders of ₹10,000 and above T&C</Typography>
            <Typography><Badge/>Special Price Get extra 24% off (price inclusive of cashback/coupon) T&C</Typography>
            <Typography><Badge/>Buy for 2000 get ₹500 off your Next Buy <style color='red'>T&C </style></Typography>
            <Typography><Badge/>Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell >
                            <Box component="span" style={{color:'#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                                <img src={adURL} style={{width:390}} alt="flipkartpoints"/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;
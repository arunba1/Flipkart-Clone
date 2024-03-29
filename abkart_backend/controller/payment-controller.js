
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams,paytmMerchantkey } from '../index.js';
import https from 'https';
import formidable from 'formidable';

export const addPaymentGateway = async (request,response) => {
    try{
        let PaytmCheckSum= await paytmchecksum.generateSignature(paytmParams,paytmMerchantkey);

        let params = {
            ...paytmParams, 'CHECKSUMHASH' : PaytmCheckSum
        }

        response.status(200).json(params);

    } catch(error){
        response.status(500).json({error:error.message});
    }
}

// export const paytmResponse = (request,response) => {
//     const form = new formidable.IncomingForm();
//     let PaytmCheckSum = request.body.CHECKSUMHASH;
//     delete request.body.CHECKSUMHASH;

//     let isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey, PaytmCheckSum);

//     if (isVerifySignature) {
//         let paytmParams={};
//         paytmParams['MID'] = request.body.MID;
//         paytmParams['ORDERID'] = request.body.ORDERID;

//         paytmchecksum.generateSignature(paytmParams,paytmMerchantkey).then(function(checksum){
//             paytmParams['CHECKSUMHASH'] = checksum;

//             let post_data= JSON.stringify(paytmParams);

//             let options = {
//                 hostname:'securegw-stage.paytm.in',
//                 port:443,
//                 path:'/order/status',
//                 headers:{
//                     'Content-Type':'application/json',
//                     'Content-Length':post_data.length
//                 }
//             }

//             let res = "";
//             const post_req = https.request(options, function (post_res) {
//                 post_res.on('data', function (chunk) {
//                     res += chunk;
//                 });

//                 post_res.on('end', function(){
//                     let result=JSON.parse(res)
//                     response.redirect('http://localhost:3000/ ')
//                 })

//             });

//             post_req.write(post_data);
//             post_req.end();

//         })
//     }   else {
//         console.log('Checksum mismatched');
//     }
// }

// export const paytmResponse = (request, response) => {

//     const form = new formidable.IncomingForm();
//     const paytmCheckSum = request.body.CHECKSUMHASH;
//     delete request.body.CHECKSUMHASH;

//     const isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey, paytmCheckSum);
//     if (isVerifySignature) {
//         let paytmParams = {};
//         paytmParams["MID"] = request.body.MID;
//         paytmParams["ORDERID"] = request.body.ORDERID;

//         paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function (checksum) {

//             paytmParams["CHECKSUMHASH"] = checksum;

//             const post_data = JSON.stringify(paytmParams);

//             const options = {
//                 hostname: 'securegw-stage.paytm.in',
//                 port: 443,
//                 path: '/order/status',
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Content-Length': post_data.length
//                 }
//             };

//             let res = "";
//             const post_req = https.request(options, function (post_res) {
//                 post_res.on('data', function (chunk) {
//                     res += chunk;
//                 });

//                 post_res.on('end', function () {
//                     let result = JSON.parse(res);
//                     console.log(result);
//                     response.redirect(`http://localhost:3000/`)
//                 });
//             });
//             post_req.write(post_data);
//             post_req.end();
//         });
//     } else {
//         console.log("Checksum Mismatched");
//     }
// }
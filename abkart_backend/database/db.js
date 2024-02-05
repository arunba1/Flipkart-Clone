import mongoose from "mongoose";

export const Connection =async (username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-vn9odxk-shard-00-00.xltksgd.mongodb.net:27017,ac-vn9odxk-shard-00-01.xltksgd.mongodb.net:27017,ac-vn9odxk-shard-00-02.xltksgd.mongodb.net:27017/ABCART?ssl=true&replicaSet=atlas-qq2zms-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useUnifiedTopology:true ,useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch(error){
        console.log('Error while connecting with the database',error.message);
    }
} 

export default Connection;
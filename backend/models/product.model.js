import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
},{
    timestamp:true, //This option automatically adds two fields, createdAt and updatedAt, to the schema
});

const Product=mongoose.model('Product',productSchema);//products

export default Product;
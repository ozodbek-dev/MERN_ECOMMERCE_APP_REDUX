const {Schema,model} = require('mongoose'); 

const productSchema = new Schema({
  name:{
    type:String,
    required:[true,"Please Enter Product Name"], 
    trim:true,
  },
  desc:{
    type:String,
    required:[true, "Please, Enter Product Description"]
  }, 
  price:{
    type:Number,
    required:[true, "Please Enter Product Price as Number"], 
    maxLength:[8,"Price cannot exceed 8 chareacters"]
  }, 
  rating:{
    type:Number,
    default:0
  }, 
  images:{
    public_id:{
      type:String,
      required:true
    }
  }, 
  category:{
    type:String, 
    required:[true, "Please Enter Product Category"]
  }, 
  stock:{
    type:Number,
    required:[true,"Please Enter Product Stock"], 
    maxLength : [4, "Stock Canot exceed 4 characters"],
  }, 
  numOfViews:{
    type:Number, default:0
  },
  reviews:[
    {
      name:{
        type:String,
        required:true,
      }, 
      rating:{
        type:Number,
        required:true,
      }, 
      comment:{
        type:String,
        required:true,
      }
    }
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports = model('Product', productSchema);
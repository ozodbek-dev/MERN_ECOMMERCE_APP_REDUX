const Order = require("../models/orderModels");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/error_handler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const resHandler = require("../utils/response_handler");

//Create Orderer
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    totalPrice,
    taxPrice,
    shippingPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    totalPrice,
    taxPrice,
    shippingPrice,
    paidAt:Date.now(),
    user:req.user._id
  })

  resHandler(res,201,{success:true,order})
});


//get Single Order
exports.getSingleOrder = catchAsyncErrors(async(req,res,next)=>{
  const order = await Order.findById(req.params.id).populate("user","name email",);

  if(!order) return next(new Error(`Order not found with this id: ${req.params.id}`, 404));

  resHandler(res,200,{success:true,order});
})

//get Logged in user Orders
exports.myOrders = catchAsyncErrors(async(req,res,next)=>{
  const orders = await Order.find({user:req.user._id});

  resHandler(res,200,{success:true,orders});
})


//get all  Orders --Admin
exports.getAllOrders = catchAsyncErrors(async(req,res,next)=>{
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach(order=>{
    totalAmount += order.totalPrice;
  })

  resHandler(res,200,{success:true,orders,totalAmount});
})

//update order status --Admin
exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{
  const order = await Order.findById(req.params.id);

    if(order.orderStatus === "Delivered") return next(new ErrorHandler("You have already delivered this order",400));

    order.orderItems.forEach(async order=>{
      await updateStock(order.product,order.quantity);
    })

     order.orderStatus = req.body.orderStatus;

    if(req.body.orderStatus  === "Delivered"){
      order.deliveredAt = Date.now();
    }

    await order.save({validateBeforeSave:false, new:true}) 

  resHandler(res,200,{success:true});
})

async function updateStock (id,qty){
  const product = await Product.findById(id);

  product.stock -=  qty;
  await product.save({validateBeforeSave:false, new:true})
}

//delete order --Admin
exports.deleteOrder = catchAsyncErrors(async(req,res,next)=>{
  const order = await Order.findById(req.params.id);
  
  if(!order)
    return next(new ErrorHandler("Order not found with this id", 404));

    await order.remove();

  resHandler(res,200,{success:true});
})
const { Schema, model } = require("mongoose");

const { ObjectId } = Schema;

const orderSchema = new Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },

    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },

  orderItems: [
    {
      product: {
        type: ObjectId,
        ref: "Product",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
   
    },
  ],
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },

  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  taxPrice: {
    type: Number,
    default: 0,
  },
  itemsPrice: {
    type: Number,
    default: 0,
  },
  shippingPrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  orderStatus: {
    type: String,
    requird: true,
    default: "Processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Order", orderSchema);

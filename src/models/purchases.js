import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    items: [
      {
        categoryId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    godownId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goddown",
      required: true,
    },
    modeOfTransport: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Purchase || mongoose.model("Purchase", purchaseSchema);

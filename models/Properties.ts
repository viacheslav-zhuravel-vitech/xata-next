import mongoose from "mongoose";

const PropertiesSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Property name is required"],
    },
    type: {
      type: String,
      required: [true, "Property type is required"],
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    beds: {
      type: Number,
      required: [true, "Number of beds is required"],
    },
    baths: {
      type: Number,
      required: [true, "Number of baths is required"],
    },
    amenities: [String],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: {
      type: [String],
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Properties =
  mongoose.models.Properties || mongoose.model("Properties", PropertiesSchema);

export default Properties;

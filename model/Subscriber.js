import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
    },
    source: {
      type: String,
      default: "footer",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
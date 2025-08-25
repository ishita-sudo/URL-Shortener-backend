import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortcode: {
      type: String,
      required: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true, // full shortened URL (e.g., http://localhost:5000/abc123)
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Url", urlSchema);

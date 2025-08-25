import Url from "../models/url.js";
import { nanoid } from "nanoid";

export const shortenUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    // generate shortcode
    const shortcode = nanoid(6);

    // base URL (from env or default localhost:5000)
    const baseUrl = process.env.BASE_URL || "http://localhost:5000";

    // full short URL
    const shortUrl = `${baseUrl}/${shortcode}`;

    // create new record
    const newUrl = new Url({
      shortcode,
      originalUrl,
      shortUrl, // now saved in DB ✅
    });

    await newUrl.save();

    res.json({
      message: "Short URL created successfully",
      shortUrl,
      shortcode,
      originalUrl,
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// redirect controller
export const redirectUrl = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const url = await Url.findOne({ shortcode });

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    // increase click count
    url.clicks++;
    await url.save();

    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error("Error redirecting:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// admin list
export const listUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    res.json(urls);
  } catch (error) {
    console.error("Error fetching URLs:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const deleteUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const url = await Url.findByIdAndDelete(id);

    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    res.json({ message: "URL deleted successfully" });
  } catch (error) {
    console.error("Error deleting URL:", error);
    res.status(500).json({ message: "Server error" });
  }
};

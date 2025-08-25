import express from "express";
import { shortenUrl, redirectUrl, listUrls, deleteUrl } from "../controllers/urlController.js";

const router = express.Router();

// API routes
router.post("/shorten", shortenUrl);
router.get("/admin/urls", listUrls);
router.delete("/admin/urls/:id", deleteUrl); // ✅ new route

// Redirect route
router.get("/:shortcode", redirectUrl);

export default router;

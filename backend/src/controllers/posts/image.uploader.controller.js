import { getSpecificPostServiceBasedSlug } from "../../services/posts/post.services.js";
import appError from "../../utils/appError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { GetSlugPostSchema } from "../../validators/posts.validator.js";

export const imageUploaderController = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("req.file.filename", req.file.filename);

  //   // Return the file path or URL
  //   res.json({
  //     message: "Image uploaded successfully",
  //     fileName: req.file.filename,
  //     url: `http://localhost:${PORT}/uploads/${req.file.filename}`,
  //   });
});

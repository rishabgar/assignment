import { getPostService } from "../../services/posts/post.services.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const getAllPostController = asyncHandler(async (_req, res) => {
  const data = await getPostService();
  return res.status(200).json({
    statusCode: 200,
    message: "All Posts Fetched Successfully",
    data,
  });
});

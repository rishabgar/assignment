import { getLatestPostService } from "../../services/posts/post.services.js";
import asyncHandler from "../../utils/asyncHandler.js";

export const getLatestPostController = asyncHandler(async (req, res) => {
  const data = await getLatestPostService();

  return res.status(200).json({
    statusCode: 200,
    message: "Latests Post Fetched Successfully",
    data,
  });
});

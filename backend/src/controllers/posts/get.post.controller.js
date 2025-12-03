import { getSpecificPostService } from "../../services/posts/post.services.js";
import appError from "../../utils/appError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { GetPostSchema } from "../../validators/posts.validator.js";

export const getPostController = asyncHandler(async (req, res) => {
  const result = GetPostSchema.safeParse(req.params);

  if (!result.success) {
    throw new appError(
      400,
      `${result.error.issues[0].path}:${result.error.issues[0].message}`
    );
  } else {
    const { post_id } = result.data;

    const data = await getSpecificPostService({ post_id });

    return res.status(200).json({
      statusCode: 200,
      message: "Post Deleted Successfully",
      data,
    });
  }
});

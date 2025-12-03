import { createPostService } from "../../services/posts/post.services.js";
import appError from "../../utils/appError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { postSchema } from "../../validators/posts.validator.js";

export const createPostController = asyncHandler(async (req, res) => {
  const result = postSchema.safeParse(req.body);

  if (!result.success) {
    throw new appError(
      400,
      `${result.error.issues[0].path}:${result.error.issues[0].message}`
    );
  } else {
    const { title, content, tags, views } = result.data;

    const data = await createPostService({ title, content, tags, views });

    return res.status(200).json({
      statusCode: 200,
      message: "Post Created Successfully",
      data,
    });
  }
});

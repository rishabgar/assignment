import { getSpecificPostServiceBasedSlug } from "../../services/posts/post.services.js";
import appError from "../../utils/appError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { GetSlugPostSchema } from "../../validators/posts.validator.js";

export const getSlugPostController = asyncHandler(async (req, res) => {
  const result = GetSlugPostSchema.safeParse(req.params);

  if (!result.success) {
    throw new appError(
      400,
      `${result.error.issues[0].path}:${result.error.issues[0].message}`
    );
  } else {
    const { slug } = result.data;

    const data = await getSpecificPostServiceBasedSlug({ slug });

    return res.status(200).json({
      statusCode: 200,
      message: "Post Fetched Successfully",
      data,
    });
  }
});

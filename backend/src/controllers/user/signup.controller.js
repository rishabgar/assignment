import { signUpService } from "../../services/user/user.services.js";
import appError from "../../utils/appError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { signUpSchema } from "../../validators/user.validator.js";

export const signUpController = asyncHandler(async (req, res) => {
  const result = signUpSchema.safeParse(req.body);

  if (!result.success) {
    throw new appError(
      400,
      `${result.error.issues[0].path}:${result.error.issues[0].message}`
    );
  } else {
    const { user_email, user_name, user_password } = result.data;

    const data = await signUpService({ user_email, user_name, user_password });

    return res.status(200).json({
      statusCode: 200,
      message: "Post Created Successfully",
      data,
    });
  }
});

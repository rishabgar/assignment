import { loginService } from "../../services/user/user.services.js";
import { loginSchema } from "../../validators/user.validator.js";
import asyncHandler from "../../utils/asyncHandler.js";
import appError from "../../utils/appError.js";

export const loginController = asyncHandler(async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    throw new appError(
      400,
      `${result.error.issues[0].path}:${result.error.issues[0].message}`
    );
  }

  const { user_email, user_password } = result.data;

  const data = await loginService({ user_email, user_password });

  return res.status(200).json({
    statusCode: 200,
    message: "Login successful",
    data,
  });
});

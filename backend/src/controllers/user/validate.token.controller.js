import asyncHandler from "../../utils/asyncHandler.js";
import appError from "../../utils/appError.js";
import { validateTokenService } from "../../services/user/user.services.js";

export const validateTokenController = asyncHandler(async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new appError(401, "Token not provided");
  }

  const data = validateTokenService(token);

  return res.status(200).json({
    statusCode: 200,
    message: "Token is valid",
    data,
  });
});

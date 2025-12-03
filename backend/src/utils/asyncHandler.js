import appError from "./appError.js";

const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      console.log("error.statusCode", error.statusCode);
      console.log("error.message", error.message);
      console.log("error.data", error.data);
      next(
        new appError(
          error.statusCode || 500,
          error.message || "Internal Server Error!",
          error.data || null
        )
      );
    }
  };
};

export default asyncHandler;

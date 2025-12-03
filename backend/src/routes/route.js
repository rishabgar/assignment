import { Router } from "express";
import { createPostController } from "../controllers/posts/create.posts.controller.js";
import { deletePostController } from "../controllers/posts/delete.posts.controller.js";
import { getAllPostController } from "../controllers/posts/get.all.posts.controller.js";
import { getPostController } from "../controllers/posts/get.post.controller.js";
import { getLatestPostController } from "../controllers/posts/get.latest.posts.controller.js";
import { getSlugPostController } from "../controllers/posts/get.slug.based.post.controller.js";
import { imageUploaderController } from "../controllers/posts/image.uploader.controller.js";
import multer from "multer";
import path from "path";
import { signUpController } from "../controllers/user/signup.controller.js";
import { loginController } from "../controllers/user/login.controller.js";
import { validateTokenController } from "../controllers/user/validate.token.controller.js";
const route = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const base = path.basename(file.originalname, ext);
    cb(null, `${base}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage: storage });

route.post("/create-post", createPostController);
route.delete("/delete-post/:post_id", deletePostController);
route.get("/get-all-post", getAllPostController);
route.get("/get-post/:post_id", getPostController);
route.get("/get-latest-post", getLatestPostController);
route.get("/get-slug-post/:slug", getSlugPostController);
route.post("/upload-image", upload.single("image"), imageUploaderController);
route.post("/sign-up", signUpController);
route.post("/login", loginController);
route.post("/validate-token", validateTokenController);

export default route;

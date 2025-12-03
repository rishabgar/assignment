import { getDB } from "../../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appError from "../../utils/appError.js";

export const signUpService = async ({
  user_email,
  user_name,
  user_password,
}) => {
  const db = getDB();
  const hashedPassword = await bcrypt.hash(user_password, 10);
  const data = await db.query(
    `INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)`,
    [user_name, user_email, hashedPassword]
  );
  return { user_id: data[0].insertId };
};

export const loginService = async ({ user_email, user_password }) => {
  const db = getDB();
  console.log("user_email", user_email);
  const [rows] = await db.query(
    "SELECT user_id, user_name, user_email, user_password FROM user WHERE user_email = ?",
    [user_email]
  );

  console.log("rows", rows);

  if (rows.length === 0) {
    throw new appError(400, "Invalid email or password");
  }

  const user = rows[0];

  const match = await bcrypt.compare(user_password, user.user_password);

  if (!match) {
    throw new appError(400, "Invalid email or password");
  }

  const token = jwt.sign(
    {
      user_id: user.user_id,
      user_email: user.user_email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "6h" }
  );

  return {
    token,
    user: {
      user_id: user.user_id,
      user_name: user.user_name,
      user_email: user.user_email,
    },
  };
};

export const validateTokenService = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return {
      valid: true,
      user: {
        user_id: decoded.user_id,
        user_email: decoded.user_email,
      },
    };
  } catch (err) {
    throw new appError(401, "Invalid or expired token");
  }
};

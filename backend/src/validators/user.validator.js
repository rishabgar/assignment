import { z } from "zod";

export const signUpSchema = z
  .object({
    user_name: z.string().trim().nonempty({ error: "Invalid user name" }),
    user_email: z
      .string()
      .trim()
      .toLowerCase()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        error: "Invalid email address",
      }),
    user_password: z.string().min(6),
  })
  .strict();

export const loginSchema = z.object({
  user_email: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      error: "Invalid email address",
    }),
  user_password: z.string().min(6, "Password must be at least 6 characters"),
});

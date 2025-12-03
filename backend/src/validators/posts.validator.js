import { z } from "zod";

export const postSchema = z
  .object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    content: z.string().min(10, "Content must be at least 10 characters"),
    tags: z.array(z.string()).optional().default([]),
    views: z.number().min(0, "Views must be a positive number"),
  })
  .strict();

export const deletePostSchema = z
  .object({
    post_id: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => val > 0, { message: "ID must be positive" }),
  })
  .strict();

export const GetPostSchema = z
  .object({
    post_id: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => val > 0, { message: "ID must be positive" }),
  })
  .strict();

export const GetSlugPostSchema = z
  .object({
    slug: z.string().min(3, "Title must be at least 3 characters"),
  })
  .strict();

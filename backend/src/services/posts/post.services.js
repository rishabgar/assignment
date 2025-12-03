import { getDB } from "../../db/index.js";
import { generateSlug } from "../../utils/utilFunctions.js";
import { nanoid } from "nanoid";

export const createPostService = async ({ title, content, tags, views }) => {
  const db = getDB();
  const slugTitle = `${generateSlug(title)}-${nanoid(6)}`;

  const data = await db.query(
    `INSERT INTO posts (title, content, tags, views,slug)
   VALUES (?, ?, CAST(? AS JSON), ?,?)`,
    [title, content, JSON.stringify(tags), views, slugTitle]
  );
  return { postId: data[0].insertId };
};

export const deletePostService = async ({ post_id }) => {
  const db = getDB();
  await db.query(`DELETE FROM posts WHERE post_id = ?`, [post_id]);
  return;
};

export const getPostService = async () => {
  const db = getDB();
  const data = await db.query(
    `SELECT post_id,title,content,tags,views,slug FROM posts`
  );
  return data[0];
};

export const getSpecificPostService = async ({ post_id }) => {
  const db = getDB();
  const data = await db.query(
    `SELECT title,content,tags,views,slug FROM posts WHERE post_id = ?`,
    [post_id]
  );
  return data[0];
};

export const getLatestPostService = async () => {
  const db = getDB();
  const data = await db.query(
    `SELECT post_id, title, content, tags, views, slug FROM posts WHERE created_date_time >= NOW() - INTERVAL 1 DAY`
  );
  return data[0];
};

export const getSpecificPostServiceBasedSlug = async ({ slug }) => {
  const db = getDB();
  const data = await db.query(
    `SELECT post_id,title,content,tags,views,slug FROM posts WHERE slug = ?`,
    [slug]
  );
  return data[0];
};

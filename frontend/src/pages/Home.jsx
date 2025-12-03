import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/get-latest-post").then((res) => setPosts(res.data.data));
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - My CMS</title>
        <meta name="description" content="Welcome to our CMS website" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.post_id}
            className="border rounded-xl p-5 shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>

            <div
              className="text-gray-600 line-clamp-3 mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="text-sm text-gray-500">👁 {post.views} views</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

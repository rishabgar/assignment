import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/get-all-post")
      .then((res) => setPosts(res.data.data || []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Blog - MyCMS</title>
        <meta name="description" content="All blog posts" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        {loading ? (
          <div className="text-gray-500">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-gray-600">No posts available yet.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.post_id}
                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
              >
                {/* Post Title */}
                <h2 className="text-xl font-semibold mb-2">
                  <Link to={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>

                <p
                  className="text-gray-600 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: p.content }}
                />

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  👁 {p.views} views
                </div>
                <Link
                  to={`/blog/${p.slug}`}
                  className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

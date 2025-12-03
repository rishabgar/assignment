import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api
      .get(`/get-slug-post/${slug}`)
      .then((res) => setPost(res.data.data[0]))
      .catch(() => setPost(undefined));
  }, [slug]);

  if (post === null)
    return (
      <Layout>
        <div className="p-8 text-gray-500">Loading…</div>
      </Layout>
    );

  if (post === undefined)
    return (
      <Layout>
        <div className="p-8 text-red-500">Post not found</div>
      </Layout>
    );

  return (
    <Layout>
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || ""} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <article>
          <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>

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

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-6 text-sm text-gray-500">👁 {post.views} views</div>

          <div className="mt-8">
            <Link to="/blog" className="text-blue-600">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}

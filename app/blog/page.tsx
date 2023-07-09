import { NEXT_URL } from "@lib/constants/global";
import { formatDate, truncate } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";

async function blogPosts() {
  const res = await fetch(`${NEXT_URL}/api/blog/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data.data;
}

const BlogPage = async () => {
  const data = await blogPosts();
  const posts = data?.posts;
  return (
    <div className="container mx-auto flex flex-col gap-y-10 py-8">
      <h1 className="font-fancy text-4xl">Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {posts?.map((post: any, key: number) => (
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col col-span-1 w-full bg-white shadow rounded-lg"
            key={key}
          >
            <div className="flex-1">
              <div className="relative object-contain h-[200px] w-full aspect-auto">
                <Image
                  src={post.feature_image}
                  fill
                  className="object-cover"
                  alt={post.title}
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-y-2 p-6 w-full">
              <p className="text-xs">{formatDate(post.created_at)}</p>
              <h2 className="font-bold text-lg text-balance">{post.title}</h2>
              <p className="text-gray-500 text-justify">
                {truncate(post.excerpt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

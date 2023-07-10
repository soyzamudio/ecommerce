import { NEXT_URL } from "@lib/constants/global";
import { formatDate, truncate } from "@lib/utils";
import Link from "next/link";
import Image from "next/image";

async function blogPosts(slug: string) {
  const fetchPosts = await fetch(`${NEXT_URL}/api/blog/tags/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await fetchPosts?.json();
  return { postsData: posts.data };
}

// regex to replace all dashes with spaces in a string
// https://stackoverflow.com/a/1144788/114157
// const slug = "this-is-a-slug";
// const slugWithSpaces = slug.replace(/-/g, " ");

const TagsPage = async ({ params }: { params: { slug: string } }) => {
  const { postsData } = await blogPosts(params.slug);

  return (
    <section className="container mx-auto flex flex-col gap-y-10 py-8">
      <h1>{params.slug.replace(/-/g, " ")}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {postsData.posts.map((post: any, key: number) => (
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
    </section>
  );
};

export default TagsPage;

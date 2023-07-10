import Twitter from "@components/icons/Twitter";
import { NEXT_URL } from "@lib/constants/global";
import { formatDate, truncate } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";

async function blogPosts() {
  const fetchPosts = await fetch(`${NEXT_URL}/api/blog/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const fetchTags = await fetch(`${NEXT_URL}/api/blog/tags`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const tags = await fetchTags?.json();
  const posts = await fetchPosts?.json();
  return { postData: posts.data, tagsData: tags.data };
}

const BlogPage = async () => {
  const { postData, tagsData } = await blogPosts();

  return (
    <>
      <section className="relative pattern--white py-12">
        {/* <div className="relative container mx-auto z-10 flex flex-col gap-y-4">
          <h1>Blog de belleza y cuidado</h1>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-400">
              Secretos esenciales para una piel radiante.
            </h2>
            <Link
              className="text-blue-600 flex gap-x-2 items-center"
              href="https://twitter.com/ciclo.dispensary"
              target="_blank"
            >
              <div>Sigue @Ciclo.Dispensary en Twitter</div>
              <Twitter />
            </Link>
          </div>
        </div> */}
        <div className="gradient absolute bottom-0 bg-gradient-to-bl from-off-white via-transparent to-off-white h-full w-full z-0"></div>
        <div className="gradient absolute bottom-0 bg-gradient-to-br from-transparent via-off-white to-transparent opacity-90 h-full w-full z-0"></div>
      </section>
      <section className="container mx-auto">
        <div className="flex gap-x-8 items-center justify-center py-4">
          {tagsData.tags.map((tag: any, key: number) => (
            <Link
              href={`/blog/tags/${tag.slug}`}
              className="flex flex-col gap-y-2 items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow transition-all"
            >
              <div className="relative object-contain h-10 w-10 aspect-auto">
                <Image
                  src={tag.feature_image}
                  fill
                  className="object-contain"
                  alt={tag.name}
                />
              </div>
              <div className="text-sm font-fancy uppercase" key={key}>
                {tag.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container mx-auto flex flex-col gap-y-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {postData.posts.map((post: any, key: number) => (
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
    </>
  );
};

export default BlogPage;

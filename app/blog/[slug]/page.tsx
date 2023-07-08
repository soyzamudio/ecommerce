import Popular from "@components/Popular";
import { NEXT_URL } from "@lib/constants/global";
import { formatDate } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await blogPost(params.slug);
  const post = data.blogPost.posts[0];
  return {
    title: `${post?.title} | Blog`,
    description: post?.excerpt,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: `${NEXT_URL}/blog/${params.slug}`,
      siteName: "Ciclo Dispensary",
      title: `Ciclo Dispensary | ${post?.title} | Blog`,
      description: post?.excerpt,
      images: [
        {
          url: post?.feature_image,
          width: 1200,
          height: 630,
          alt: `Ciclo Dispensary | ${post?.title} | Blog`,
        },
      ],
    },
  };
}

async function blogPost(slug: string) {
  const blogPost = await fetch(`${NEXT_URL}/api/blog/posts/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const blogPostList = await fetch(`${NEXT_URL}/api/blog/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const blogPostListData = await blogPostList.json();
  const blogPostData = await blogPost.json();
  return { blogPost: blogPostData.data, blogPostList: blogPostListData.data };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const data = await blogPost(params.slug);
  const post = data.blogPost.posts[0];
  const list = data.blogPostList.posts;
  return (
    <section className="container mx-auto py-8 flex flex-col gap-y-4">
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <div className="flex flex-col gap-y-4 pr-8">
            <div className="font-semibold font-sans">Artículos recientes</div>
            {list.map((post: any, key: number) => (
              <Link
                href={`/blog/${post.slug}`}
                key={key}
                className="flex flex-col gap-y-2"
              >
                <div className="font-semibold font-sans text-black">
                  {post.title}
                </div>
                <div className="text-xs uppercase">
                  Publicado:{" "}
                  <span className="font-semibold">
                    {formatDate(post.created_at)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid col-span-3">
          <div className="flex flex-col gap-y-2 mb-2">
            <h1 className="font-semibold font-sans capitalize text-5xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-x-2">
              <div className="text-sm uppercase">
                Publicado:{" "}
                <span className="font-semibold">
                  {formatDate(post.created_at)}
                </span>
              </div>{" "}
              •
              <div className="text-sm uppercase">
                Tiempo de lectura:{" "}
                <span className="font-semibold">
                  {post.reading_time} minutos
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="relative object-contain h-[400px] w-full aspect-auto">
              <Image
                src={post.feature_image}
                fill
                className="object-cover"
                alt={post.title}
              />
            </div>
            <div className="prose prose-stone lg:prose-xl max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Popular />
      </div>
    </section>
  );
};

export default BlogPostPage;

import { NEXT_URL } from "@lib/constants/global";
import { formatDate } from "@lib/utils";
import Link from "next/link";
import Image from "next/image";
import Popular from "@components/Popular";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await blogPost(params.slug);
  const post = data.blog.posts[0];
  return {
    metadataBase: new URL(`${NEXT_URL}`),
    title: `${post?.title} | Blog`,
    description: post?.excerpt,
    openGraph: {
      type: "website",
      locale: "es_MX",
      url: `/blog/${params.slug}`,
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
  return { blog: blogPostData.data, list: blogPostListData.data };
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { blog, list } = await blogPost(params.slug);

  function addBreadcrumbsJsonLd() {
    const itemList = [];

    itemList.unshift({
      "@type": "ListItem",
      position: 1,
      name: "Blog",
      item: `${NEXT_URL}/blog`,
    });

    itemList.push({
      "@type": "ListItem",
      position: itemList.length + 1,
      name: blog.posts[0].title,
      item: `${NEXT_URL}/blog/${blog.posts[0].slug}`,
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList,
    };

    return {
      __html: JSON.stringify(schema),
    };
  }

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        key="product-jsonld"
      />
      <section className="container mx-auto py-8 flex flex-col gap-y-4">
        <div className="grid grid-cols-4">
          <div className="col-span-1 hidden md:flex">
            <div className="flex flex-col gap-y-4 pr-8">
              <div className="font-semibold font-sans">Artículos recientes</div>
              {list.posts.map((post: any, key: number) => (
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
          <div className="grid col-span-4 md:col-span-3">
            <div className="flex flex-col gap-y-2 mb-2">
              <div className="flex gap-x-1 text-sm">
                <Link className="text-gray-400" href="/blog">
                  Blog
                </Link>
                <span className="text-gray-400">/</span>
                <Link
                  href={`${NEXT_URL}/blog/${blog.posts[0].title}`}
                  className="font-semibold text-gray-700"
                >
                  {blog.posts[0].title}
                </Link>
              </div>
              <h1 className="font-semibold font-sans capitalize text-5xl leading-tight">
                {blog.posts[0].title}
              </h1>
              <div className="flex items-center gap-x-2">
                <div className="text-sm uppercase">
                  Publicado:{" "}
                  <span className="font-semibold">
                    {formatDate(blog.posts[0].created_at)}
                  </span>
                </div>{" "}
                •
                <div className="text-sm uppercase">
                  Tiempo de lectura:{" "}
                  <span className="font-semibold">
                    {blog.posts[0].reading_time} minutos
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="relative object-contain h-[400px] w-full aspect-auto">
                <Image
                  src={blog.posts[0].feature_image}
                  fill
                  className="object-cover"
                  alt={blog.posts[0].title}
                />
              </div>
              <div className="prose prose-stone lg:prose-xl max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blog.posts[0].html }} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Popular />
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;

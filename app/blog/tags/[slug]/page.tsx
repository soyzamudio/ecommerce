import { NEXT_URL } from "@lib/constants/global";

async function blogPosts(slug: string) {
  const fetchPosts = await fetch(`${NEXT_URL}/api/blog/tags/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await fetchPosts?.json();
  return { posts: posts.data };
}

const TagsPage = async ({ params }: { params: { slug: string } }) => {
  const { posts } = await blogPosts(params.slug);
  console.log("POSTS", posts);
  return <div>TagsPage</div>;
};

export default TagsPage;

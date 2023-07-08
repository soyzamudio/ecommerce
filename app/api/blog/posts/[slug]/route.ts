import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data = await fetch(
    `${process.env.GHOST_URL}/ghost/api/content/posts/slug/${params.slug}/?key=${process.env.GHOST_CONTENT_API_KEY}&include=tags,feature_image`
  );
  const post = await data.json();
  return NextResponse.json({ data: post }, { status: 200 });
}

import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const data = await fetch(
    `${process.env.GHOST_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&filter=tag:${params.slug}&order=published_at%20desc&limit=3&fields=title,slug,feature_image,excerpt,reading_time,created_at&include=feature_image`
  );
  const posts = await data.json();
  return NextResponse.json({ data: posts }, { status: 200 });
}

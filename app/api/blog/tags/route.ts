import { NextResponse } from "next/server";

export async function GET() {
  const data = await fetch(
    `${process.env.GHOST_URL}/ghost/api/content/tags/?key=${process.env.GHOST_CONTENT_API_KEY}&fields=name,slug,feature_image`
  );
  const tags = await data.json();
  console.log(tags)
  return NextResponse.json({ data: tags }, { status: 200 });
}

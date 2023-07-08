import { NextResponse } from "next/server";
const swell = require("swell-node");

swell.init(process.env.SWELL_STORE_NAME, process.env.SWELL_SECRET_KEY);

export async function GET() {
  const data = await swell.get("/products", {
    where: { active: true },
    limit: 25,
    page: 1,
  });
  return NextResponse.json(data);
}
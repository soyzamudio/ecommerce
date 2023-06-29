import { NextResponse } from 'next/server';

const swell = require("swell-node");

swell.init(process.env.SWELL_STORE_NAME, process.env.SWELL_SECRET_KEY);

export async function GET() {
  const data = await swell.get('/products', {
    limit: 20,
    fields: 'slug,name,price,images,tags,type',
  });

  return NextResponse.json(data);
}
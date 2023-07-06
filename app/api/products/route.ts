import { NextResponse } from "next/server";
const swell = require("swell-node");

swell.init(process.env.SWELL_STORE_NAME, process.env.SWELL_SECRET_KEY);

export async function GET() {
  console.log('LOG HERE');
  const data = await swell.get("/products", {
    where: { active: true },
    limit: 25,
    page: 1,
  });
  return NextResponse.json(data);
}


// export function getProducts({
//   page = 1,
//   limit = 20,
//   search = "",
//   category,
// }: {
//   page?: number;
//   limit?: number;
//   search?: string;
//   category?: string;
// }) {
//   console.log("CATEGORY", category);
//   const params: any = {
//     search,
//     limit,
//     page,
//     expand: ["variants"],
//   };

//   if (category) {
//     params["category"] = category;
//   }

//   return swell.products.list(params);
// }

// export function getProductBySlug(slug: string) {
//   return swell.products.get(slug, {
//     expand: ["variants"],
//   });
// }

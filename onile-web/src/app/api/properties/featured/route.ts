import { NextResponse } from "next/server";
import { featuredProperties } from "@/lib/content/landingContent";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = Number(searchParams.get("limit"));
  const limit = Number.isFinite(limitParam) && limitParam > 0 ? Math.min(limitParam, 12) : 4;

  return NextResponse.json(
    {
      properties: featuredProperties.slice(0, limit),
      total: featuredProperties.length,
    },
    {
      status: 200,
      headers: {
        "cache-control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}

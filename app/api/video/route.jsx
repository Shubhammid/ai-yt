import { db } from "@/configs/db";
import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { videoId, userEmail } = await req.json();

  const result = await db
    .insert(VIDEO_RAW_TABLE)
    .values({
      videoId: videoId,
      createdBy: userEmail,
    })
    .returning(VIDEO_RAW_TABLE);

  return NextResponse.json({result});
}

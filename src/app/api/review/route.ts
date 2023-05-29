import { database } from "@/utils/db";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  return NextResponse.json({ success: true, payload: "hello mom" });
}

const CreateNewReviewSchema = z.object({
  user_id: z.number().nonnegative(),
  course_id: z.number().nonnegative(),
  difficulty_points: z.number().max(10).min(0),
  usefulness_points: z.number().max(10).min(0),
  comment: z.string(),
  course_content: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newReview = CreateNewReviewSchema.parse(body);

    const query = `
      INSERT INTO review (user_id, course_id, difficulty_points, usefulness_points, comment, course_content)
      VALUES (${newReview.user_id}, ${newReview.course_id}, ${newReview.difficulty_points}, ${newReview.usefulness_points}, "${newReview.comment}", "${newReview.course_content}");
    `;

    const { rowsAffected } = await database.execute(query);

    if (rowsAffected) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, payload: "Unexpected Error" });
  } catch (error) {
    return NextResponse.json({ success: false, payload: error });
  }
}

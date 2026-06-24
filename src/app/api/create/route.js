import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import supabase from "../../config/supabaseClient";

export async function POST(request) {
  const cookieStore = await cookies();

  const userId =
    cookieStore.get("userId")?.value;

  const body = await request.json();

  const { title, short_description, content,} = body;

  const { data, error } = await supabase
      .from("Blog")
      .insert([
        {
          title,short_description,content,author_id: userId,
        },
      ]);

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  return NextResponse.json({
    message: "Blog Submitted Successfully",data,
  });
}
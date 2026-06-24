import { NextResponse } from "next/server";
import supabase from "../../config/supabaseClient";

export async function GET() {
  const { data, error } =
    await supabase
      .from("Blog")
      .select("*");

  if (error) {
    return NextResponse.json({
      error: error.message,
    });
  }

  return NextResponse.json(data);
}
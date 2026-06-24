import { NextResponse } from "next/server";
import supabase from "../../../config/supabaseClient";

export async function GET(_, context) {
  const { id } = await context.params;

  const { data, error } = await supabase
    .from("Blog")
    .select(`
      *,
      User (
        full_Name
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
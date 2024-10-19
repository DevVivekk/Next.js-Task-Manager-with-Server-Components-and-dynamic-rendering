import { NextRequest, NextResponse } from "next/server";
import data from '@/utils/tasks.json';
export async function GET(req) {
  return NextResponse.json({ message: data},{status:201});
}

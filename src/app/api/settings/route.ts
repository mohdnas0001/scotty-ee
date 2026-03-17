import { NextRequest, NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/auth";
import { getSettings, updateSettings } from "@/lib/store";

export async function GET() {
  const isAdmin = await getAdminFromCookies();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ settings: getSettings() });
}

export async function PATCH(req: NextRequest) {
  const isAdmin = await getAdminFromCookies();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const patch = await req.json();
  const updated = updateSettings(patch);
  return NextResponse.json({ settings: updated });
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const startAt = body.startAtUTC ? new Date(body.startAtUTC) : null;
    if (!startAt || isNaN(startAt.getTime())) {
      return NextResponse.json({ error: "Invalid startAtUTC" }, { status: 400 });
    }

    // Persist minimal fields we have in the current schema
    const created = await prisma.appoitnement.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        mobile: Number(body.mobile) || 0,
      },
    });

    return NextResponse.json({ ok: true, id: created.id }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

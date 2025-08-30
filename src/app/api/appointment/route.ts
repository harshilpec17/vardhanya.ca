import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Accept both client key styles
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
  const mobileRaw = body.mobile;
    const timezone = body.timezone;
    const date = body.date;
    const timeslot = body.timeslot ?? body.timeSlot;
  const notes = typeof (body.notes ?? body.additionalNotes) === "string" ? (body.notes ?? body.additionalNotes) : "";

  // Required: firstName, lastName, email, mobile, timezone, date, timeslot
    const missing = [
      ["firstName", firstName],
      ["lastName", lastName],
      ["email", email],
  ["mobile", mobileRaw],
      ["timezone", timezone],
      ["date", date],
      ["timeslot", timeslot],
    ].filter(([, v]) => typeof v !== "string" || v.trim() === "");

    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.map(([k]) => k).join(", ")}` },
        { status: 400 }
      );
    }

    // Validate mobile as digits-only string first
    const mobileStr = String(mobileRaw).trim();
    if (!/^\d+$/.test(mobileStr)) {
      return NextResponse.json({ error: "Invalid mobile number format. Use digits only." }, { status: 400 });
    }
    // Current DB column is Int (32-bit). Many 10+ digit numbers exceed 2,147,483,647 and will fail.
    // Surface a clear error until we migrate the column to text.
    const mobileNum = Number(mobileStr);
    if (!Number.isFinite(mobileNum)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 });
    }
    if (mobileNum > 2147483647) {
      return NextResponse.json(
        { error: "Phone number is too long for the current system. We will fix this shortly—please enter a shorter local number for now." },
        { status: 422 }
      );
    }

  const created = await prisma.appoitnement.create({
      data: {
        firstName,
        lastName,
        email,
    mobile: mobileNum,
        timezone,
        date,
        timeslot,
        notes, // allow empty string
      },
    });

    return NextResponse.json({ ok: true, id: created.id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/appointment failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
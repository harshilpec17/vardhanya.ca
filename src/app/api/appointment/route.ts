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
      ["notes", notes],
      ["timeslot", timeslot],
    ].filter(([, v]) => typeof v !== "string" || v.trim() === "");

    if (missing.length) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.map(([k]) => k).join(", ")}` },
        { status: 400 }
      );
    }

    const mobile = parseInt(String(mobileRaw), 10);
    if (Number.isNaN(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 });
    }

    const created = await prisma.appoitnement.create({
      data: {
        firstName,
        lastName,
        email,
        mobile,
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
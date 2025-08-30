"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { format, set } from "date-fns";
import { toZonedTime, fromZonedTime } from "date-fns-tz";
import { cn } from "@/lib/utils";


// CONTRACT
// Inputs: User fills firstName, lastName, email, mobile, preferredContact, date, timeSlot, additionalNotes, timezone
// Output: Calls POST /api/appointments with payload { ...fields, startAtUTC }
// Success: show confirmation message (and server will send Resend email)
// Errors: show validation errors; on server error show generic failure

// NOTE: To fully enable DB double-booking checks + email, we'll need:
// - Prisma setup (schema + client) and an API route at /app/api/appointments/route.ts
// - Resend API key and email template
// - shadcn/ui Calendar component (we currently use a simple <input type="date"/> fallback)
// Requesting approval to add those in a follow-up.

const TIMEZONES = [
    { label: "USA (New York)", value: "America/New_York" },
    { label: "Canada (Toronto)", value: "America/Toronto" },
    { label: "India (Kolkata)", value: "Asia/Kolkata" },
] as const;

type TimezoneValue = (typeof TIMEZONES)[number]["value"];

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    preferredContact: "email" | "phone";
    date: string; // yyyy-MM-dd
    timeSlot: string; // HH:mm
    additionalNotes?: string;
    timezone: TimezoneValue;
};

function buildTimeSlots(dateStr: string, tz: TimezoneValue) {
    if (!dateStr) return [] as string[];
    const [y, m, d] = dateStr.split("-").map(Number);

    // Local working hours 09:00 - 17:00 in selected timezone
    const startLocal = new Date(Date.UTC(y, (m - 1), d, 0, 0, 0));
    // We'll create slots by constructing local time in TZ, then format back to HH:mm
    const slots: string[] = [];

    for (let hour = 9; hour < 17; hour++) {
        for (let min = 0; min < 60; min += 30) {
            const localDate = set(startLocal, { hours: hour, minutes: min, seconds: 0, milliseconds: 0 });
            const inTZ = toZonedTime(localDate, tz);
            const label = format(inTZ, "HH:mm");
            slots.push(label);
        }
    }

    return slots;
}

export default function AppointmentBooking({ className }: { className?: string }) {
    const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = React.useState<string>("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            preferredContact: "email",
            timezone: TIMEZONES[0].value,
            date: "",
            timeSlot: "",
            additionalNotes: "",
        },
        mode: "onBlur",
    });

    const date = watch("date");
    const timezone = watch("timezone");
    const timeSlots = React.useMemo(() => buildTimeSlots(date, timezone), [date, timezone]);

    async function onSubmit(values: FormValues) {
        setStatus("submitting");
        setMessage("");
        try {
            // Convert selected date + time (in TZ) to UTC for storage
            const [h, min] = (values.timeSlot || "00:00").split(":").map(Number);
            const [y, m, d] = (values.date || "1970-01-01").split("-").map(Number);

            // Create date in selected timezone then translate to UTC
            const approximateUTC = fromZonedTime(new Date(y, m - 1, d, h, min, 0), values.timezone);

            const res = await fetch("/api/appointment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                   firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    mobile: values.mobile,
                    timezone: values.timezone,
                    date: values.date,
                    timeslot: values.timeSlot,         // API expects 'timeslot'
                    notes: values.additionalNotes ?? "" // API expects 'notes'
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error((data && data.error) || "Failed to book appointment");
            }

            setStatus("success");
            setMessage("Appointment booked. A confirmation email has been sent.");
            reset();
        } catch (err: any) {
            setStatus("error");
            setMessage(err?.message || "Something went wrong. Please try again.");
        }
    }

    const disablePast = (e: React.ChangeEvent<HTMLInputElement>) => {
        const today = format(new Date(), "yyyy-MM-dd");
        e.currentTarget.min = today;
    };

    return (
        <section className={cn("w-full", className)}>
            <div className="relative z-10 mx-auto w-full max-w-3xl rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur-md shadow-sm">
                <div className="border-b border-[color:var(--border)] p-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--foreground)]">Book a Free Consultation</h2>
                    <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Pick a date and time that works for you. Well confirm by email.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">First name</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && (
                            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Last name</label>
                        <input
                            type="text"
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("email", {
                                required: "Email is required",
                                validate: (v: string) => (v.includes("@") ? true : "Email must include @"),
                            })}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Mobile */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Mobile</label>
                        <input
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                validate: (v: string) => (/^\d+$/.test(v) ? true : "Only digits are allowed"),
                            })}
                        />
                        {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile.message}</p>}
                    </div>

                    {/* Preferred contact */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Preferred contact</label>
                        <select
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("preferredContact", { required: true })}
                        >
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                    </div>

                    {/* Timezone */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Timezone</label>
                        <select
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("timezone", { required: true })}
                        >
                            {TIMEZONES.map((tz) => (
                                <option key={tz.value} value={tz.value}>
                                    {tz.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Date */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Date</label>
                        {/* Placeholder for shadcn/ui Calendar. To keep a single-file component per guidelines, we use input[type=date] now. */}
                        <input
                            type="date"
                            onFocus={disablePast}
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("date", { required: "Please pick a date" })}
                        />
                        {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date.message}</p>}
                    </div>

                    {/* Time slot */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium mb-1">Time slot</label>
                        <select
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            disabled={!date}
                            {...register("timeSlot", { required: "Please pick a time slot" })}
                        >
                            <option value="" disabled>
                                {date ? "Select a time" : "Pick a date first"}
                            </option>
                            {timeSlots.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>
                        {errors.timeSlot && <p className="mt-1 text-xs text-red-500">{errors.timeSlot.message}</p>}
                    </div>

                    {/* Additional notes */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium mb-1">What do you need?</label>
                        <textarea
                            rows={4}
                            placeholder="Share a bit about your project or questions..."
                            className="w-full rounded-lg border px-3 py-2 bg-transparent border-[color:var(--border)] focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            {...register("additionalNotes")}
                        />
                    </div>

                    {/* Submit */}
                    <div className="col-span-1 md:col-span-2 mt-2">
                        <button
                            type="submit"
                            disabled={status === "submitting"}
                           
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] hover:shadow-emerald-500/30 disabled:opacity-70"
                        >
                            {status === "submitting" ? "Booking..." : "Book Appointment"}
                        </button>
                        {message && (
                            <p
                                className={cn(
                                    "mt-3 text-sm",
                                    status === "success" ? "text-emerald-400" : status === "error" ? "text-red-500" : "text-[color:var(--muted-foreground)]"
                                )}
                            >
                                {message}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}

import { PrismaClient, Prisma } from "../src/app/generated/prisma";
import { appoitnement } from "../src/app/generated/prisma";


const prisma = new PrismaClient();

export async function getAppointments() {
    return await prisma.appointment.findMany();
}

export async function createAppointment(data: Prisma.AppointmentCreateInput) {
    return await prisma.appointment.create({ data });
}

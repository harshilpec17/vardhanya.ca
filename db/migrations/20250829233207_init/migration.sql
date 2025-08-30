-- CreateTable
CREATE TABLE "public"."Appoitnement" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "timezone" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "timeslot" TEXT NOT NULL,

    CONSTRAINT "Appoitnement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Secret" (
    "id" UUID NOT NULL,
    "hash" TEXT NOT NULL,
    "cipherText" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "burnedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Secret_pkey" PRIMARY KEY ("id")
);

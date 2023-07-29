-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "surname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_surname_key" ON "User"("surname");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateTable
CREATE TABLE "pet_types" (
    "pet_type_id" SERIAL NOT NULL,
    "type" VARCHAR(30) NOT NULL,

    CONSTRAINT "pet_types_pkey" PRIMARY KEY ("pet_type_id")
);

-- CreateTable
CREATE TABLE "pets" (
    "pet_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "user_id" INTEGER,
    "birthday" TIMESTAMP(6),
    "pet_type_id" INTEGER,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("pet_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(25) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "birthday" TIMESTAMP(6),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_pet_type_id_fkey" FOREIGN KEY ("pet_type_id") REFERENCES "pet_types"("pet_type_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

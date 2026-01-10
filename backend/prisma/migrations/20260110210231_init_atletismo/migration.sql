-- CreateEnum
CREATE TYPE "RaceStatus" AS ENUM ('PENDING', 'LIVE', 'FINISHED');

-- CreateTable
CREATE TABLE "Athlete" (
    "id" SERIAL NOT NULL,
    "no_dorsal" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "equipo" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Athletics_Events" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" "RaceStatus" NOT NULL DEFAULT 'PENDING',
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Athletics_Events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "carril" INTEGER NOT NULL,
    "tiempo" DOUBLE PRECISION,
    "posicion" INTEGER,
    "atletaId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Athlete_no_dorsal_key" ON "Athlete"("no_dorsal");

-- CreateIndex
CREATE UNIQUE INDEX "Result_carreraId_carril_key" ON "Result"("carreraId", "carril");

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_atletaId_fkey" FOREIGN KEY ("atletaId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Athletics_Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

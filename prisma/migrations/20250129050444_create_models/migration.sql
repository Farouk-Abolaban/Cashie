/*
  Warnings:

  - The `type` column on the `transactions` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('INCOME', 'EXPENSE');

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "type",
ADD COLUMN     "type" "TransactionType";

-- DropEnum
DROP TYPE "TransacationType";

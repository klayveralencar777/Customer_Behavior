/*
  Warnings:

  - You are about to alter the column `unitPrice` on the `TransactionItem` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- DropIndex
DROP INDEX "Customer_email_userId_key";

-- DropIndex
DROP INDEX "Customer_id_userId_key";

-- DropIndex
DROP INDEX "Product_id_userId_key";

-- DropIndex
DROP INDEX "ProductMovement_id_userId_key";

-- AlterTable
ALTER TABLE "TransactionItem" ALTER COLUMN "unitPrice" SET DATA TYPE DECIMAL(10,2);

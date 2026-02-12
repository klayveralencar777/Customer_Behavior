/*
  Warnings:

  - You are about to alter the column `unitPrice` on the `ProductMovement` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to drop the column `amount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `TransactionItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email,userId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `totalAmount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_customerId_fkey";

-- DropForeignKey
ALTER TABLE "TransactionItem" DROP CONSTRAINT "TransactionItem_productId_fkey";

-- DropForeignKey
ALTER TABLE "TransactionItem" DROP CONSTRAINT "TransactionItem_transactionId_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductMovement" ADD COLUMN     "transactionId" TEXT,
ALTER COLUMN "unitPrice" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "amount",
ADD COLUMN     "totalAmount" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "customerId" DROP NOT NULL;

-- DropTable
DROP TABLE "TransactionItem";

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_userId_key" ON "Customer"("email", "userId");

-- CreateIndex
CREATE INDEX "ProductMovement_transactionId_idx" ON "ProductMovement"("transactionId");

-- CreateIndex
CREATE INDEX "Transaction_userId_idx" ON "Transaction"("userId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMovement" ADD CONSTRAINT "ProductMovement_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

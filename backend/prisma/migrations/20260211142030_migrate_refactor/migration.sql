/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `ProductMovement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_userId_key" ON "Customer"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_userId_key" ON "Product"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductMovement_id_userId_key" ON "ProductMovement"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_id_userId_key" ON "Transaction"("id", "userId");

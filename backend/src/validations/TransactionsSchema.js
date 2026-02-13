import { z } from "zod";

export const createTransactionSchema = z.object({
  customerId:  z.string().uuid().optional(),
  type: z.enum(["VENDA", "COMPRA"]),
  items: z.array(
    z.object({
      productId: z.string().uuid(),
      quantity: z.number().positive(),
      unitPrice: z.number().nonnegative()
    })
  ).min(1)
});

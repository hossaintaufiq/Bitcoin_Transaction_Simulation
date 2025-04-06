// import { z } from 'zod'

// const walletSchema = z.object({
//   name: z.string().min(1, 'Asset name is required'),
//   amount: z.number().nonnegative('Amount cannot be negative'),
//   value: z.number().nonnegative('Value cannot be negative'),
// })

// const userWalletSchema = z.object({
//   userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Mongo ObjectId'),
//   assets: z.array(walletSchema),
// })

// export const WalletValidation = {
//   userWalletSchema,
// }


// new code 
// import { z } from 'zod'

// // Transaction schema
// const transactionSchema = z.object({
//   type: z.enum(['BUY', 'SELL']),
//   amount_btc: z.number().nonnegative('BTC amount cannot be negative'),
//   price_usd_per_btc: z.number().nonnegative('Price per BTC cannot be negative'),
//   total_usd: z.number().nonnegative('Total value cannot be negative'),
//   timestamp: z.date().optional(),
//   status: z.enum(['pending', 'completed', 'failed']).optional(),
// })

// // Wallet schema with transactions
// const walletSchema = z.object({
//   name: z.string().min(1, 'Asset name is required'),
//   amount: z.number().nonnegative('Amount cannot be negative'),
//   value: z.number().nonnegative('Value cannot be negative'),
//   transactions: z.array(transactionSchema).optional(), // list of transactions
// })

// // User Wallet schema
// const userWalletSchema = z.object({
//   userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid Mongo ObjectId'),
//   assets: z.array(walletSchema),
// })

// export const WalletValidation = {
//   userWalletSchema,
// }

import { z } from 'zod';

const tradeSchema = z.object({
  body: z.object({
    type: z.enum(['buy', 'sell'], {
      required_error: "Type must be 'buy' or 'sell'",
    }),
    amount: z.number()
      .positive('Amount must be positive')
      .max(100, 'Maximum 100 BTC per trade'),
    price: z.number().positive(),
    total: z.number().positive(),
    timestamp: z.string().datetime(),
    balance: z.number().nonnegative(),
    btcHolding: z.number().nonnegative()
  }).refine(data => {
    const expectedTotal = data.amount * data.price;
    return Math.abs(data.total - expectedTotal) < 0.01;
  }, 'Total amount mismatch')
});

const querySchema = z.object({
  limit: z.number().int().positive().max(100).optional(),
  offset: z.number().int().nonnegative().optional(),
  type: z.enum(['buy', 'sell']).optional()
}).optional();

export const WalletValidation = {
  tradeSchema,
  querySchema
};
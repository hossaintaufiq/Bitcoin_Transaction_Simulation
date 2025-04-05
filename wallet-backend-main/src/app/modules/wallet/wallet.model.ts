// import { model, Schema } from 'mongoose'
// import { IUserWallet } from './wallet.interface'

// const WalletSchema = new Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
// })

// const UserwalletSchema = new Schema<IUserWallet>(
//   {
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//       unique: true,
//     },
//     wallet: [WalletSchema],
//   },
//   {
//     timestamps: true,
//   },
// )

// export const UserWallet = model<IUserWallet>('Userwallet', UserwalletSchema)



import { model, Schema } from 'mongoose'
import { IUserWallet } from './wallet.interface'

// Transaction schema (embedded in each wallet)
const TransactionSchema = new Schema({
  type: { type: String, enum: ['BUY', 'SELL'], required: true },
  amount_btc: { type: Number, required: true },
  price_usd_per_btc: { type: Number, required: true },
  total_usd: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'completed' },
})

// Wallet schema
const WalletSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  value: { type: Number, required: true },
  transactions: [TransactionSchema], // New: transaction history per wallet
})

// User wallet schema
const UserwalletSchema = new Schema<IUserWallet>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    wallet: [WalletSchema],
  },
  {
    timestamps: true,
  },
)

export const UserWallet = model<IUserWallet>('Userwallet', UserwalletSchema)

// import { Document, Types } from 'mongoose'

// export interface IWallet {
//   name: string
//   amount: number
//   value: number
// }

// export interface IUserWallet extends Document {
//   userId: Types.ObjectId
//   wallet: IWallet[]
// }


// new code 
import { Document, Types } from 'mongoose'

export interface ITransaction {
  type: 'BUY' | 'SELL'
  amount_btc: number
  price_usd_per_btc: number
  total_usd: number
  timestamp?: Date
  status?: 'pending' | 'completed' | 'failed'
}

export interface IWallet {
  name: string
  amount: number
  value: number
  transactions?: ITransaction[]
}

export interface IUserWallet extends Document {
  userId: Types.ObjectId
  wallet: IWallet[]
}

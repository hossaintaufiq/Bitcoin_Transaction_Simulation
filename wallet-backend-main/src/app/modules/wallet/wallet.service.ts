import { IWallet } from './wallet.interface'
import { UserWallet } from './wallet.model'

const createWalletInDB = async (payload: IWallet) => {
  const result = (await UserWallet.create(payload)).populate('author')
  return result
}
const getAllWalletFromDB = async () => {
  const result = await UserWallet.find()
  return result
}

export const WalletService = {
  createWalletInDB,
  getAllWalletFromDB,
}

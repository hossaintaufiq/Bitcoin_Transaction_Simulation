// import express from 'express'
// // import validateRequest from '../../middlewares/validateRequest'
// // import { WalletValidation } from './wallet.validation'
// import { WalletController } from './wallet.controller'

// const router = express.Router()

// router.post(
//   '/',
//   // validateRequest(WalletValidation.userWalletSchema),
//   WalletController.createWallet,
// )
// router.get('/', WalletController.getAllWallet)

// export const WalletRoute = router
// // 
import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { WalletValidation } from './wallet.validation'
import { WalletController } from './wallet.controller'

const router = express.Router()

// POST: Create new user wallet with assets (and optional transactions)
router.post(
  '/',
  validateRequest(WalletValidation.userWalletSchema), // ✅ Corrected casing here
  WalletController.createWallet
)

// GET: Fetch all wallets
router.get(
  '/',
  WalletController.getAllWallet
)

export const WalletRoute = router

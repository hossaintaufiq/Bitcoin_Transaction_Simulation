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
import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { WalletValidation } from './wallet.validation';
import { WalletController } from './wallet.controller';

const router = express.Router();

// Enhanced trade validation and logging
router.post(
  '/',
  (req, res, next) => {
    console.log('\n💡 Incoming POST /api/wallet');
    console.log('📦 Headers:', req.headers);
    console.log('📤 Request Body:', req.body);
    console.log('🕒 Timestamp:', new Date().toISOString());
    next();
  },
  validateRequest(WalletValidation.tradeValidationSchema),
  WalletController.processTrade
);

// Enhanced GET endpoint with query validation
router.get(
  '/',
  (req, res, next) => {
    console.log('\n💡 Incoming GET /api/wallet');
    console.log('🔍 Query Parameters:', req.query);
    next();
  },
  validateRequest(WalletValidation.getTradesSchema),
  WalletController.getTradeHistory
);

export const WalletRoute = router;
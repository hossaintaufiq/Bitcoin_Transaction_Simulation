import { RequestHandler } from 'express'
import catchAsync from '../../utiles/catchAsync'
import sendResponse from '../../utiles/sendResponse'
import httpStatus from 'http-status'
import { WalletService } from './wallet.service'

const createWallet: RequestHandler = catchAsync(async (req, res) => {
  const result = await WalletService.createWalletInDB(req.body)
  sendResponse(res, {
    data: result,
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
  })
})
const getAllWallet: RequestHandler = catchAsync(async (req, res) => {
  const result = await WalletService.getAllWalletFromDB()
  sendResponse(res, {
    success: true,
    data: result,
    message: 'Successfully get all Blogs from database',
    statusCode: httpStatus.OK,
  })
})

export const WalletController = {
  createWallet,
  getAllWallet,
}

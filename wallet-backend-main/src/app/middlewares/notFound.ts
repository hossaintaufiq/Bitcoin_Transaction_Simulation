/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import status from 'http-status'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    messsage: 'API NOT FOUND',
    error: `The requested URL ${req.originalUrl} with method ${req.method} does not exist--😢😥`,
  })
}

export default notFound

import { AnyZodObject } from 'zod'
import catchAsync from '../utiles/catchAsync'
import { NextFunction, Request, Response } from 'express'

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync({
      body: req.body,
    })
    next()
  })
}
export default validateRequest

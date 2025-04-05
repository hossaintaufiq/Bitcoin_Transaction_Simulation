import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utiles/catchAsync'
import AppError from '../errors/AppError'
import { TUserRole } from '../modules/user/user.interface'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../modules/user/user.model'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    // Check if the authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
    }
    const token = authHeader.split(' ')[1]
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
    }
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload
    if (requiredRoles && !requiredRoles.includes(decoded?.role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
    }
    // checking if the user is exist
    const user = await User.isUserExistsByEmail(decoded?.email)

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!')
    }
    // checking if the user is blocked
    if (await User.isUserBlocked(decoded?.email)) {
      throw new AppError(httpStatus.FORBIDDEN, 'User is Blocked')
    }
    req.user = decoded as JwtPayload
    next()
  })
}

export default auth

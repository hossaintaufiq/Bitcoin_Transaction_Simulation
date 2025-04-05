import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import notFound from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { WalletRoute } from './app/modules/wallet/wallet.route'

const app: Express = express()
//parser
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ['http://localhost:5173/'],
    credentials: true,
  }),
)

app.use('/api/wallet', WalletRoute)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Backend😉')
})

app.use(globalErrorHandler)
app.use(notFound)
export default app

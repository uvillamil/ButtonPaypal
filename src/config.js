import {config} from 'dotenv'

config();
export const CLIENT_ID = process.env.CLIENT_ID
export const APP_SECRET = process.env.APP_SECRET
export const PAYPAL_API = process.env.PAYPAL_API

export const PORT = 3004
export const HOST = process.env.HOST
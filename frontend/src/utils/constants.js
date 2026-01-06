import dotenv from 'dotenv'
dotenv.config()

export const BASE_URL= import.meta.env.VITE_API_URL || "http://localhost:5000"

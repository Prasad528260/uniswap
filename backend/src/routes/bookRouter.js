import express from 'express'
import { addBook, deleteBook, getBooks, getUserBooks,getNotes } from '../controllers/bookController.js'
import { userAuth } from '../middlewares/userAuth.js';
import upload from '../middlewares/upload.js';
const bookRouter= express.Router();

// * Add book or notes
bookRouter.post('/addbook',userAuth,upload.single('bookImg'),addBook)

// * Get Books 
bookRouter.get('/getbook',userAuth,getBooks)

// * Get Notes
bookRouter.get('/getnotes',userAuth,getNotes)

// * Delete Books or notes
bookRouter.delete('/delete/:bookId',userAuth,deleteBook)

// * Get User Books or notes
bookRouter.get('/userbooks',userAuth,getUserBooks)

export default bookRouter;
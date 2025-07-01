import express from 'express'
import { addBook, deleteBook, getBooks, getUserBooks } from '../controllers/bookController.js'
import { userAuth } from '../middlewares/userAuth.js';
import upload from '../middlewares/upload.js';
const bookRouter= express.Router();

// * Add book
bookRouter.post('/addbook',userAuth,upload.single('bookImg'),addBook)

// * Get Books
bookRouter.get('/getbook',userAuth,getBooks)

// * Delete Books
bookRouter.delete('/delete/:bookId',userAuth,deleteBook)

// * Get User Books
bookRouter.get('/userbooks',userAuth,getUserBooks)

export default bookRouter;
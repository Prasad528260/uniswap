import express from 'express'
import { addBook, deleteBook, getBooks } from '../controllers/bookController.js'
import { userAuth } from '../middlewares/userAuth.js';
import upload from '../middlewares/upload.js';
const bookRouter= express.Router();

// * Add book
bookRouter.post('/addbook',userAuth,upload.single('bookImg'),addBook)

// * Get Books
bookRouter.get('/book/view',userAuth,getBooks)

// * Delete Books
bookRouter.delete('/book/delete',userAuth,deleteBook)

export default bookRouter;
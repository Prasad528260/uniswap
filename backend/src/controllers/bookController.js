import mongoose from "mongoose";
import Book from "../models/book.js";
import { validateBook } from "../utils/validateBook.js";

// * Adding a New book to sell
export const addBook = async (req, res, next) => {
  try {
    
    const {
      title,
      subject,
      author,
      condition,
      semester,
      price,
      category,
      description,
    } = req.body;
    const bookImg = req?.file || req?.files[0];
    console.log(bookImg);

    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND AT BOOK");
      throw new Error("User Not Found");
    }
    const isValid = validateBook({
      title,
      subject,
      condition,
      price,
      description,
      category,
      author,
    });
    if (isValid) {
      console.log(bookImg);
      const newPrice = book.getPrice(price);
      let book = new Book({
        title,
        condition,
        price:newPrice,
        subject,
        author,
        semester,
        category,
        description,
        bookImg: bookImg.filename,
        sellerId: user._id,
      });
      console.log(book);
      
      book = await book.save();
      res.status(200).json(book);
    }
  } catch (error) {
    console.log("ERROR : ADD BOOK FAILED", error.message);
    res.status(400).json({ message: "Add Book Failed" });
  }
};

// * Get All Books
// TODO : after fetching book ensure required data is fetched -- DONE
export const getBooks = async (req, res, next) => {

  const {semester} = req.query;
  const user = req.user;
  if (!user) {
    console.log("ERROR : USER NOT FOUND");
    return res.status(400).json({ message: "User Not Found" });
  }
  try {
    let books;
    if(semester){
       books = await Book.find({ category: "book" ,status:"Available",semester})
      .select(
        "_id title subject author condition price semester category description bookImg "
      )
      .populate("sellerId", "firstName lastName _id department profilePicture");
    }
    else{
       books = await Book.find({ category: "book" ,status:"Available"})
      .select(
        "_id title subject author condition price semester category description bookImg "
      )
      .populate("sellerId", "firstName lastName _id department profilePicture");
    }
    if (!books) {
      console.log("ERROR : BOOK NOT FOUND");
      return res.status(400).json({ message: "Book Not Found" });
    }
    res.status(200).json(books);
  } catch (error) {
    console.log("ERROR : GET BOOKS FAILED", error.message);
    res.status(400).json({ message: "Get Books Failed" });
  }
};

// * Get Books uploaded by User
// TODO : after fetching book ensure required data is fetched -- DONE
export const getUserBooks = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      return res.status(400).json({ message: "User Not Found" });
    }
    const userBooks = await Book.find({ category: "book", sellerId: user._id }).select(
        "_id title subject author condition price semester category description bookImg "
      );
    if (!userBooks) {
      console.log("ERROR : USER BOOKS NOT FOUND");
      return res.status(400).json({ message: "User Books Not Found" });
    }
    res.status(200).json(userBooks);
  } catch (error) {
    console.log("ERROR : GET USER BOOKS FAILED", error.message);
    res.status(400).json({ message: "Get User Books Failed" });
  }
};

// * Delete Book
// TODO : after deleting book ensure required data is deleted  -- DONE
export const deleteBook = async (req, res, next) => {
  const user = req.user;
  const {bookId} = req.params;
  if (!user) {
    console.log("ERROR : USER NOT FOUND");
    return res.status(400).json({ message: "User Not Found" });
  }
  try {
     if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID" });
    }
    const objctBookId= new mongoose.Types.ObjectId(bookId)
    const deletedBook = await Book.findByIdAndDelete({_id:objctBookId,sellerId:user._id});
    if (!deletedBook) {
      console.log("ERROR : BOOK NOT FOUND");
      return res.status(400).json({ message: "Book Not Found" });
    }
    res.status(200).json(deletedBook);
  } catch (error) {
    console.log("ERROR : DELETE BOOK FAILED", error.message);
    res.status(400).json({ message: "Delete Book Failed" });
  }
};

// * Get Notes
export const getNotes = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    console.log("ERROR : USER NOT FOUND");
    return res.status(400).json({ message: "User Not Found" });
  }
  try {
    const notes = await Book.find({ category: "notes" })
      .select(
        "_id title subject author condition price semester category description bookImg "
      )
      .populate("sellerId", "firstName lastName _id department profilePicture");
    if (!notes) {
      console.log("ERROR : NOTES NOT FOUND");
      return res.status(400).json({ message: "Notes Not Found" });
    }
    res.status(200).json(notes);
  } catch (error) {
    console.log("ERROR : GET NOTES FAILED", error.message);
    res.status(400).json({ message: "Get Notes Failed" });
  }
};

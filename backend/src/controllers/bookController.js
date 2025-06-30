import Book from "../models/book.js";
import { validateBook } from "../utils/validateBook.js";

// * Adding a New book to sell
export const addBook = async (req, res, next) => {
  try {
    const { title, author, condition, price,category, description } = req.body;
    const bookImg = req.file || req.files[0];
    console.log(bookImg);

    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND AT BOOK");
      throw new Error("User Not Found");
    }
    const isValid = validateBook({title,author,condition,price,description,category})
    if (isValid) {
    console.log(bookImg);
    const book = new Book({
      title,
      author,
      condition,
      price,
      category,
      description,
      bookImg:bookImg.filename,
      sellerId:user._id,
    });
    book = await book.save();
    res.status(200).json(book);
    
    }
  } catch (error) {
    console.log("ERROR : ADD BOOK FAILED", error.message);
    res.status(400).json({ message: "Add Book Failed" });
  }
};

// * Get All Books
// TODO : after fetching book ensure required data is fetched
export const getBooks = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    console.log("ERROR : USER NOT FOUND");
    throw new Error("User Not Found");
  }
  try {
    const books = await Book.find({ category: "book" });
    if (!books) {
      console.log("ERROR : BOOK NOT FOUND");
      throw new Error("Book Not Found");
    }
    res.status(200).json(books);
  } catch (error) {
    console.log("ERROR : GET BOOKS FAILED", error.message);
    res.status(400).json({ message: "Get Books Failed" });
  }
};

// * Get Books uploaded by User
// TODO : after fetching book ensure required data is fetched
export const getUserBooks = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      console.log("ERROR : USER NOT FOUND");
      throw new Error("User Not Found");
    }
    const userBooks = await Book.find({ category: "book", sellerId: user._id });
    if (!userBooks) {
      console.log("ERROR : USER BOOKS NOT FOUND");
      throw new Error("User Books Not Found");
    }
    res.status(200).json(userBooks);
  } catch (error) {
    console.log("ERROR : GET USER BOOKS FAILED", error.message);
    res.status(400).json({ message: "Get User Books Failed" });
  }
};


// * Delete Book
// TODO : after deleting book ensure required data is deleted
export const deleteBook = async (req, res, next) => {};

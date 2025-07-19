import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import Book from "./Book";
import { motion ,AnimatePresence} from "framer-motion";

const Books = () => {
  const [books, setBooks] = useState();
  const [semester, setSemester] = useState("");
  const [notes, setNotes] = useState("");
  const [notesData, setNotesData] = useState();
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};
  const handleFilter = () => {
    if (notes === "") {
      getBooks();
    } else {
      getNotes();
    }
  };
  const getNotes = async () => {
    const query = new URLSearchParams();
    if (semester) {
      query.append("semester", semester);
    }

    const res = await axios.get(
      BASE_URL + "/book/getnotes?" + query.toString(),
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    setNotesData(res.data);
  };

  const getBooks = async () => {
    const query = new URLSearchParams();
    if (semester) {
      query.append("semester", semester);
    }

    const res = await axios.get(
      BASE_URL + "/book/getbook?" + query.toString(),
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    setBooks(res.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (!books) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex gap-4 items-center bg-gray-800 p-5 rounded-lg shadow-lg max-w-2xl border border-gray-600">
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="px-4 py-2 border-2 border-gray-600 rounded-md text-sm bg-gray-700 text-gray-100 cursor-pointer transition-colors duration-300 min-w-32 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-20"
        >
          <option value="">All Semesters</option>
          <option value="first">1</option>
          <option value="second">2</option>
          <option value="third">3</option>
          <option value="fourth">4</option>
          <option value="fifth">5</option>
          <option value="sixth">6</option>
          <option value="seventh">7</option>
          <option value="eighth">8</option>
        </select>

        <select name="notes" id="" onChange={(e) => setNotes(e.target.value)}>
          <option value="">Books</option>
          <option value="notes">Notes</option>
        </select>
        <button
          onClick={handleFilter}
          className="px-5 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer transition-colors duration-300 hover:bg-blue-500 active:transform active:translate-y-px"
        >
          Apply Filters
        </button>
      </div>
      <AnimatePresence mode="wait">
        {notes === "notes" ? (
          <motion.div
            key="notes"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInUp}
            transition={fadeInUp.transition}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {notesData?.map((note, index) => (
              <motion.div
                key={note._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Book book={note} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="books"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInUp}
            transition={fadeInUp.transition}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {books?.map((book, index) => (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
              >
                <Book book={book} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Books;

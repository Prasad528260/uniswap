import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import Book from "./Book";
import { motion ,AnimatePresence} from "framer-motion";
import { useSelector,useDispatch } from "react-redux";
import { addBooks } from "../utils/bookSlice";
import { addNotes } from "../utils/notesSlice";
const Books = () => {

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books) || [];
  const [semester, setSemester] = useState("");
  const [notes, setNotes] = useState("");
  const notesData = useSelector((state) => state.notes) || [];
  
 
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.4, ease: "easeInOut" },
};
  const handleFilter = () => {
    if (notes === "" ) {
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
    dispatch(addNotes(res.data));
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
    dispatch(addBooks(res.data));
  };

  useEffect(() => {
    // Always fetch fresh data when component mounts
    getBooks();
    getNotes();
  }, []);

  if (!books) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="relative">
      {/* Gradient background blur effect */}
      <div className="absolute -inset-1  rounded-2xl blur-lg opacity-30"></div>
      
      <div className="relative flex gap-6 items-center bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl max-w-3xl border border-slate-700/50">
        
        {/* Semester Select */}
        <div className="relative group">
          <label className="block text-xs font-medium text-slate-300 mb-2 tracking-wide uppercase">
            Semester
          </label>
          <div className="relative">
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none px-5 py-3.5 pr-12 border-2 border-slate-600/50 rounded-xl text-sm bg-slate-800/80 text-slate-100 cursor-pointer transition-all duration-300 min-w-40 hover:border-blue-400/60 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20 focus:bg-slate-800 group-hover:shadow-lg group-hover:shadow-blue-500/10"
            >
              <option value="" className="bg-slate-800">All Semesters</option>
              <option value="first" className="bg-slate-800">Semester 1</option>
              <option value="second" className="bg-slate-800">Semester 2</option>
              <option value="third" className="bg-slate-800">Semester 3</option>
              <option value="fourth" className="bg-slate-800">Semester 4</option>
              <option value="fifth" className="bg-slate-800">Semester 5</option>
              <option value="sixth" className="bg-slate-800">Semester 6</option>
              <option value="seventh" className="bg-slate-800">Semester 7</option>
              <option value="eighth" className="bg-slate-800">Semester 8</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content Type Select */}
        <div className="relative group">
          <label className="block text-xs font-medium text-slate-300 mb-2 tracking-wide uppercase">
            Content Type
          </label>
          <div className="relative">
            <select 
              onChange={(e) => setNotes(e.target.value)}
              className="appearance-none px-5 py-3.5 pr-12 border-2 border-slate-600/50 rounded-xl text-sm bg-slate-800/80 text-slate-100 cursor-pointer transition-all duration-300 min-w-36 hover:border-purple-400/60 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 focus:bg-slate-800 group-hover:shadow-lg group-hover:shadow-purple-500/10"
            >
              <option value="" className="bg-slate-800">Books</option>
              <option value="notes" className="bg-slate-800">Notes</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="relative group mt-6">
          <button
            onClick={handleFilter}
            className="relative px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-xl text-sm cursor-pointer transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-500/25 active:transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400/30 overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative flex items-center gap-2">
              Apply Filters
              <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
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

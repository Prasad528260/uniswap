import { BookOpen, Calendar, Package, User } from "lucide-react";
import React from "react";
import { useLocation } from "react-router";
import axios from 'axios'
const BookDetail = () => {
  const location = useLocation();
  const { book } = location.state || {};
    console.log(book.bookImg);

    const makeOffer = async ()=>{
      
    }
    
  const getConditionColor = (condition) => {
    switch (condition.toLowerCase()) {
      case "good":
        return "badge-success";
      case "fair":
        return "badge-info";
      case "poor":
        return "badge-warning";
      default:
        return "badge-error";
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="loading loading-spinner loading-lg text-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="navbar bg-base-200 shadow-xl sticky top-0 z-10">
        <div className="navbar-center">
          <a className="text-2xl font-bold text-accent">Book Details</a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Main Content */}
        <div className="card bg-base-200 shadow-xl rounded-xl overflow-hidden transition-shadow hover:shadow-2xl">
          <div className="grid lg:grid-cols-5 gap-6 p-6">
            {/* Left Column - Image */}
            <div className="lg:col-span-2">
              <figure className="w-full h-80 bg-base-300 rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:5000/uploads/${encodeURIComponent(book.bookImg)}`}
                  alt={book.title}
                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                />
              </figure>
            </div>

            {/* Right Column - Core Details */}
            <div className="lg:col-span-3 space-y-6">
              {/* Title, Author, Price, and Tags */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-secondary capitalize tracking-tight">
                  {book.title?.replace("-", " ")}
                </h1>
                <p className="text-xl text-base-content/70">
                  by <span className="font-semibold">{book.author}</span>
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-success">
                    ₹{book.price}
                  </div>
                  <div className="badge badge-primary badge-lg font-medium text-base">
                    {book.subject}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-secondary badge-outline text-base">
                    {book.semester} semester
                  </div>
                  <div className={`badge ${getConditionColor(book.condition)} badge-outline text-base`}>
                    {book.condition}
                  </div>
                  <div className="badge badge-neutral badge-outline text-base">
                    {book.category}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="btn btn-accent btn-block rounded-full font-semibold text-lg hover:bg-primary-focus transition-colors"
              onClick={makeOffer} >
                Make an Offer
              </button>
            </div>
          </div>

          {/* Bottom Section - Additional Details */}
          <div className="border-t border-base-300 p-6 space-y-6">
            {/* Book Information */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-success " />
              <span className="text-accent">Book Information</span>  
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-base-content/70" />
                  <span className="text-base-content/70 text-lg">Author:</span>
                  <span className="font-medium text-lg">{book.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-base-content/70" />
                  <span className="text-base-content/70 text-lg">Semester:</span>
                  <span className="font-medium text-lg">{book.semester}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-base-content/70" />
                  <span className="text-base-content/70 text-lg">Condition:</span>
                  <span className="font-medium text-lg">{book.condition}</span>
                </div>
              </div>
            </div>

            {/* Seller Information */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <User className="w-6 h-6 text-success " />
            <span className="text-accent">Seller Information</span>  
              </h2>
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={book.sellerId?.profilePicture}
                      alt={`${book.sellerId?.firstName} ${book.sellerId?.lastName}`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {book.sellerId?.firstName} {book.sellerId?.lastName}
                  </h3>
                  <p className="text-base-content/70 uppercase text-base">
                    {book.sellerId?.department} Department
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-accent">Description</h2>
              <p className="text-lg leading-relaxed text-base-content/80">
                {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
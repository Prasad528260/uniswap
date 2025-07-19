import React from 'react'
import { useNavigate } from 'react-router';

const Book = ({book}) => {
  const navigate = useNavigate()
  // console.log(book);
  const getConditionColor = (condition) => {
    switch(condition.toLowerCase()) {
      case 'good': return 'badge-success';
      case 'fair': return 'badge-info';
      case 'poor': return 'badge-warning';
      default: return 'badge-error';
    }
  };
  const handleBookClick = (book) => {
    navigate('/book-details', { state: { book } });
  };

  return (
     <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-sm mx-auto">
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
          {/* Book Image */}
          <figure className="px-4 pt-4">
            <div className="w-full h-48 bg-base-300 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={`http://localhost:5000/uploads/${encodeURIComponent(book.bookImg)}`}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
          </figure>
          
          <div className="card-body p-4">
            {/* Title and Subject */}
            <div className="flex justify-between items-start mb-2">
              <h2 className="card-title text-lg font-bold text-accent capitalize">
                {book.title.replace('-', ' ')}
              </h2>
              <div className="badge badge-primary">
                {book.subject}
              </div>
            </div>
            
            {/* Author */}
            <p className="text-base text-base-content/70 mb-2">
              by <span className="font-medium text-md">{book.author}</span>
            </p>
            
            {/* Semester and Condition */}
            <div className="flex justify-between items-center mb-3">
              <div className="badge badge-secondary">
               <span className='p-2 text-lg' >{book.semester} sem</span> 
              </div>
              <div className={`badge ${getConditionColor(book.condition)}`}>
                {book.condition}
              </div>
            </div>
            
            {/* Price */}
            <div className="text-3xl font-bold text-success mb-4">
              ₹{book.price}
            </div>
            
            {/* Seller Info */}
            <div className="divider my-2"></div>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full">
                  <img 
                    src={book.sellerId.profilePicture}
                    alt={`${book.sellerId.firstName} ${book.sellerId.lastName}`}
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium">
                  {book.sellerId.firstName} {book.sellerId.lastName}
                </p>
                <p className="text-sm text-base-content/60 uppercase">
                  {book.sellerId.department}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline" onClick={()=>handleBookClick(book)}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
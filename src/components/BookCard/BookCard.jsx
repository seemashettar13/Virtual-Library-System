import React from "react";
import { Link } from "react-router-dom";
function BookCard(props) {
    const book = props.book;
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between h-full border border-gray-100">
            <div className="space-y-3">
              
                <p className="text-gray-700">
                    <span className="font-semibold">Author:</span> {book.author}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Category:</span> {book.category}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold">Rating:</span>  {book.rating}
                </p>
            </div>
            <Link
                to={`/book-details/${book.id}`}
                className="mt-5 inline-block bg-cyan-950 text-white text-center py-2 px-4 rounded-lg font-medium  transition-colors duration-300"
            >
                View Details 
            </Link>
        </div>
    );
}
export default BookCard;

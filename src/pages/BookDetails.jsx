
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCardImage from "../component/BookCard/BookCardImage";

function BookDetails() {
    // collecting the id from the url (its non-sensitive info so we can use path params )
    const { id } = useParams(); 
    const books = useSelector(function (state) {
        return state.books.items;
    });

    // on basis of id we will will fetch the book detials..
    const book = books.find(function (b) {
        return String(b.id) === id;
    });

    if (!book) {
        return <p className="text-center text-xl">Book not found.</p>;
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-100 to-indigo-100 text-gray-800 overflow-x-hidden">
            <div className="container mx-auto p-8 max-w-4xl">
                <div className="bg-white rounded-lg shadow-xl p-8 mb-8 max-w-full">
                    <div className="flex items-center space-x-8 mb-12">
                        <BookCardImage book={book} className="rounded-lg max-w-xs" />
                        <div className="space-y-4">
                            <h1 className="text-4xl font-semibold text-gray-800">{book.title}</h1>
                            <p className="text-lg font-medium text-gray-600">By: {book.author}</p>
                            <p className="text-lg font-medium text-gray-600">Category: {book.category}</p>
                            <p className="text-lg font-medium text-gray-600">Rating: {book.rating}</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Description</h2>
                        <p className="text-lg text-gray-700">{book.description}</p>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <Link
                            to="/browse-books"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
                        >
                            Back to Browse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;

// its simple based on id we will fetch the books detials ... and for book detials we have component call bookcard and for image we have bookcardimage.
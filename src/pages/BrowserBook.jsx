

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import BookCard from '../components/BookCard/BookCard';
import SearchBar from '../components/SearchBar/SearchBar';
import BookCardImage from '../components/BookCard/BookCardImage';
function capitalizeWords(text) {
    return text
        .split(/[-\s]/) // splits by space or dash
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
function BrowseBooks() {
    const { category } = useParams();
    let originalCategory=category;
    console.log("original category is : ",originalCategory);
    if(originalCategory){
        originalCategory = capitalizeWords(originalCategory)

    }
    const books = useSelector(function (state) { return state.books.items; });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(function () {
        let filtered = books;

        if (category) {
            filtered = filtered.filter(function (book) {
                return book.category.toLowerCase() === category.toLowerCase();
            });
        }

        if (searchTerm) {
            filtered = filtered.filter(function (book) {
                return (
                    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }

        setFilteredBooks(filtered);
    }, [category, searchTerm, books]);

    return (
        <div className="p-8 bg-gradient-to-br from-blue-50 via-violet-100 to-indigo-100">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {category && (
                <h2 className="text-5xl font-extrabold text-gray-800  mb-20 text-center">
                    Books in {originalCategory}
                </h2>
            )}

            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="flex flex-col">
                            <BookCardImage book={book} />
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl text-gray-700">No books found.</p>
            )}
        </div>
    );
}

export default BrowseBooks;




import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard/BookCard';
import BookCardImage from '../components/BookCard/BookCardImage';

function Home() {
    const books = useSelector(function (state) {
        return state.books.items;
    });

    const categories = [...new Set(books.map(function (book) {
        return book.category;
    }))];

    const popularBooks = books.slice(0, 30); 

    return (
        <div className="bg-gradient-to-r from-cyan-900 via-cyan-950 to-cyan-500 px-6 py-10 min-h-screen">
            <h1 className="text-5xl font-extrabold text-center text-white mb-10 drop-shadow-md">
                 Welcome to the Bibliographic Database
            </h1>

            {/* Categories Section */}
            <section className="mb-12  ">
                <h2 className="text-3xl font-bold text-white mb-6"> Categories</h2>
                <ul className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <li key={category}>
                            <Link
                                to={`/books/${category.toLowerCase()}`}
                                className="text-lg font-semibold text-cyan-950 bg-white px-4 py-2 rounded-full shadow-md transform transition-all duration-300 hover:bg-cyan-950 hover:text-white hover:scale-110"
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Popular Books Section */}
            <section>
                <h2 className="text-3xl font-semibold text-white mb-6"> Popular Books</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {popularBooks.map((book) => (
                        <li
                            key={book.id}
                            className="bg-gray-300 shadow-lg rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Link to={`/book-details/${book.id}`}>
                                <BookCardImage book={book} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );


}

export default Home;

// at home we ahve to show navbar , category and popular books ... for popular books we selected  books from 0 to 20 or we can create a random function of a random range .... (check later)
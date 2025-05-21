
// App.js

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar.jsx";
import './index.css';
import Footer from "./components/Footer/Footer";
// Lazy loaded components
const Home = lazy(() => import("./pages/Home"));
const BrowseBooks = lazy(() => import("./pages/BrowserBook"));
const BookDetails = lazy(() => import("./pages/BookDetails"));
const AddBook = lazy(() => import("./pages/AddBook"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Router>
            {/* <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-800"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800"> */}
            {/* <div className="min-h-screen bg-gradient-to-br from-sky-300 via-indigo-200 to-pink-300 text-gray-800"> */}
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-violet-200 to-indigo-300 text-gray-800 mt-12 p-0">
                <Navbar />
                <main className="flex-1 w-full px-0 py-6">
                    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/browse-books" element={<BrowseBooks />} />
                            <Route path="/books/:category" element={<BrowseBooks />} />
                            <Route path="/book-details/:id" element={<BookDetails />} />
                            <Route path="/add-book" element={<AddBook />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;


// implement the lazy loading .... ()
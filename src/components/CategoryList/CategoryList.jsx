
import React from "react";
import { Link } from "react-router-dom"; 


function CategoryList() {
    // Dummy categories
    const categories = ["Biography", "Travel", "Cook-books", "Self-Help", "Psychology"];
    return (
        <div className="flex space-x-4">
            {categories.map(function (category, index) {
                return (
                    // Link to browse books by category
                    <Link
                        key={index}
                        to={`/books/${category}`} 
                        className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-950"
                    >
                        {category}
                    </Link>
                );
            })}
        </div>
    );
}

export default CategoryList;


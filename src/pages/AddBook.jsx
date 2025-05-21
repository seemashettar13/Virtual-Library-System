
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    // a simple structure to add book.. (its a kind of form)
    const [form, setForm] = useState({
        title: '',
        author: '',
        category: '',
        description: '',
        rating: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // custom validator so that empty data is not sent means prevent empty obj to insert in list... we can add more validators but not required here ..
    function validate() {
        const newErrors = {};
        if (!form.title) newErrors.title = 'Title is required.';
        if (!form.author) newErrors.author = 'Author is required.';
        if (!form.category) newErrors.category = 'Category is required.';
        if (!form.description) newErrors.description = 'Description is required.';
        if (!form.rating) newErrors.rating = 'Rating is required.';
        else if (isNaN(form.rating) || form.rating < 0 || form.rating > 5)
            newErrors.rating = 'Rating must be a number between 0 and 5.';
        return newErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // dispatching the acvtion...
            dispatch(addBook({ ...form, rating: parseFloat(form.rating) }));
            navigate('/browse-books');
        } else {
            setErrors(validationErrors);
        }
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-violet-200 to-indigo-300 text-cyan-950 flex items-center justify-center">
            <div className="max-w-xl w-full bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold mb-6 text-center">Add a New Book</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Author:</label>
                        <input
                            type="text"
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
                        />
                        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
                        />
                        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Description:</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Rating (0–5):</label>
                        <input
                            type="number"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            min="0"
                            max="5"
                            step="0.1"
                            className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
                        />
                        {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-cyan-950 text-white font-medium px-6 py-2 rounded-full transition duration-200"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AddBook;

// this compo will add a new book in the list...
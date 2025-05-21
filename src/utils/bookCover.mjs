
async function getBookCover(bookTitle) {
    const query = bookTitle.replace(/\s+/g, '+');
    const searchUrl = `https://openlibrary.org/search.json?title=${query}`;

    try {
        const response = await fetch(searchUrl);
        const data = await response.json();

        // Check if we got a valid result and extract the ID
        if (data.docs && data.docs.length > 0) {
            // Getting cover image ID (if available)
            const bookId = data.docs[0].cover_i; 
            console.log("book id is :::: ",bookId)
            if (bookId) {
                return `https://covers.openlibrary.org/b/id/${bookId}-L.jpg`;
            }
        }
        // we can  give any url here ...
        // return '../../public/fallback.jpg'; 
    } catch (error) {
        console.error('Error fetching book cover:', error);
        // same if any error occ we can give here a custom url of our image...
        return '/public/assest/fallback.jpg';
    }
}

export default getBookCover;

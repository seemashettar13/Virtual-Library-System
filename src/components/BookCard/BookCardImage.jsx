import { useEffect, useState } from "react";
import getBookCover from "../../utils/bookCover.mjs";

function BookCardImage({ book }) {
    const [coverImage, setCoverImage] = useState("");

    useEffect(function () {
        async function fetchBookCover() {
            let imageUrl = await getBookCover(book.title);
            console.log(`${book.title}: ${imageUrl}`);
            if (imageUrl ==="https://covers.openlibrary.org/b/id/13140934-L.jpg" || !imageUrl){
                imageUrl='/public/assest/fallback.jpg'
            }
            if(imageUrl){
                setCoverImage(imageUrl);

            }else{
                console.log("image url is : ",imageUrl);
            }
        }
        fetchBookCover();
    }, [book.title]);

    return (
        <div className="flex flex-col items-center space-y-3">
            <h1 className="text-lg font-semibold text-gray-800 text-center">{book.title}</h1>
            <div className="w-40 h-60 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 flex items-center justify-center">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt={book.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-8 h-8 border-4 border-cyan-950 border-t-transparent rounded-full animate-spin" />
                )}
            </div>
        </div>
    );
}

export default BookCardImage;



// simply importing the fuction of getting book cover from utils folder and then calling getcover function which is async function so we wrap it in useEffect..
// we are displaying like if coveriamge is loaded then show it else write loading .... we can implement a loader also .. but no nessessary ehrer.
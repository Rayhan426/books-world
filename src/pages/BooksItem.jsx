
import { useEffect, useState } from "react";
import BooksCard from "../components/BooksCard";

const BooksItem = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data)
    )
    }, [books])
    
    
    return (
         <div className="">
            <h1 className="text-center font-bold text-4xl text-[#131313] mt-24 ">Books</h1>

            <div className="grid grid-cols-1 lg:p-0 p-3 lg:grid-cols-3 gap-6 mb-32 mt-9">
        {
            books.map(book=> <BooksCard key={book.bookId} books={book}></BooksCard>)
        }
            </div>
        </div>
    );
};

export default BooksItem;
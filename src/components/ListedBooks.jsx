
import { useState, useEffect } from "react";
import Tabs from './Tabs'; 
import { getBooks } from "../utils";
import ReadBooks from "./ReadBooks";
import Wishlist from "./Wishlist";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0); 
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

   
    useEffect(() => {
        setReadBooks(getBooks('readBooks'));
        setWishlistBooks(getBooks('wishlistBooks'));
    }, []);

    return (
        <div className="">
           
            <Tabs
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                tabs={['Read Books', 'Wishlist Books']}
            />

         
            <div className="border ">
                {tabIndex === 0 ? (
                    <div>
                        {readBooks.length > 0 ? (
                            readBooks.map((book) => (
                              <ReadBooks key={book.bookId} readBook={book}>
                                </ReadBooks>
                            ))
                        ) : (
                            <p>No books in the Read list.</p>
                        )}
                    </div>
                ) : (
                    <div>
                      
                        {wishlistBooks.length > 0 ? (
                            wishlistBooks.map((book) => (
                                <Wishlist key={book.bookId} wishlistBook={book}>
                                </Wishlist>
                            ))
                        ) : (
                            <p>No books in the Wishlist.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;

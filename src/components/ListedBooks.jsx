
import { useState, useEffect } from "react";
import Tabs from './Tabs'; 
import { getBooks } from "../utils";
import ReadBooks from "./ReadBooks";
import Wishlist from "./Wishlist";
import { IoIosArrowDown } from "react-icons/io";

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

          <div className="bg-[#1313130D] rounded-lg my-14 py-9">
            <h1 className="text-[#131313] font-bold text-center text-2xl">Books</h1>
          </div>

          {/* end the books ttitle */}

<div className="w-full flex justify-center mb-14"> 
<details className="dropdown">
  <summary className="btn m-1 bg-[#23BE0A] hover:bg-black text-white ">Sort By <span><IoIosArrowDown></IoIosArrowDown></span></summary>
  <ul className="menu dropdown-content text-[#131313CC] bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</details>
</div>
           
            <Tabs
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                tabs={['Read Books', 'Wishlist Books']}
            />

         
            <div className=" p-1 ">
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


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
    const [sortBook, setSortBook] = useState('');


   
    useEffect(() => {
        setReadBooks(getBooks('readBooks'));
        setWishlistBooks(getBooks('wishlistBooks'));
       
    }, []);



    const sortBooks = (books) => {
        if (sortBook === 'rating') {
          return books.sort((a, b) => b.rating - a.rating); 
        } else if (sortBook === 'pages') {
          return books.sort((a, b) => b.totalPages - a.totalPages); 
        } else if (sortBook === 'year') {
          return books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); e
        }
        return books; 
      };

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
    <li><a onClick={() => setSortBook('rating')}>Rating</a></li>
    <li><a onClick={() => setSortBook('pages')}>Number of pages</a></li>
    <li><a onClick={() => setSortBook('year')}>Publisher year</a></li>
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
                    <>
                        {readBooks.length > 0 ? (
                            sortBooks(readBooks).map((book) => (
                              <ReadBooks  key={book.bookId} readBook={book}>
                                </ReadBooks>
                            ))
                            
                        ) : (
                            <p>No books in the Read list.</p>
                        )}

                    </>
                ) : (
                    <div>
                      
                        {wishlistBooks.length > 0 ? (
                           sortBooks( wishlistBooks).map((book) => (
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

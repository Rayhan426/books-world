import toast from "react-hot-toast";


// get items from localStorage 
const getBooks = (key) => {
    let books = [];
    const storedBooks = localStorage.getItem(key);
    if (storedBooks) {
        books = JSON.parse(storedBooks);
    }
    return books;
}

// Save a book to the read list
export const saveReadBooks = (book) => {
    let readBooks = getBooks('readBooks');
    let wishlistBooks = getBooks('wishlistBooks');

    const isExistInRead = readBooks.find(b => b.bookId === book.bookId);

    if (isExistInRead) {
        return toast.error('You have already read this book..!');
    }

    const isExistInWishlist = wishlistBooks.find(b => b.bookId === book.bookId);
    if (isExistInWishlist) {
        wishlistBooks = wishlistBooks.filter(b => b.bookId !== book.bookId);
        localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
        toast.info('Books added to Read list..!');
    }

    // Add the book to "ead list
    readBooks.push(book);
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
    toast.success('Books added to Read list!');
}

// Save  book to the 'Wishlist'
export const saveWishlist = (book) => {
    let readBooks = getBooks('readBooks');
    let wishlistBooks = getBooks('wishlistBooks');

    const isExistInWishlist = wishlistBooks.find(b => b.bookId === book.bookId);
  
    if (isExistInWishlist) {
        return toast.error(' Already added this book to your wishlist..!');
    }

    const isExistInRead = readBooks.find(b => b.bookId === book.bookId);
    
    // If the book is in the "Read" list, don't allow adding to Wishlist
    if (isExistInRead) {
        return toast.error('Already added this book to your wishlist..!');
    }

    // Add the book to "Wishlist"
    wishlistBooks.push(book);
    localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
    toast.success('Book added to Wishlist..!');
}

import toast from "react-hot-toast";


export const getBooks = ()=>{

    let readBooks = [];
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        readBooks = JSON.parse(storedBooks);
    }
    return readBooks;

}

// save read books 

export const saveReadBooks = (book)=>{
let readBooks = getBooks();
const isAxist = readBooks.find(b=> b.bookId === book.bookId);
if (isAxist) {
    return toast.error('You Have Allready Read This Books..!')
}
readBooks.push(book)
localStorage.setItem('books', JSON.stringify(readBooks))
toast.success('Books Added To Read List..!')

}
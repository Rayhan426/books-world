import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksCard = ({books}) => {

    const {bookId, bookName, author, image,  rating, category, tags, } = books;
    return (
        <Link to={`/books/${bookId}`} className="card cursor-pointer bg-base-100 border p-6 border-[#13131321] ">
        <div className="bg-[#F3F3F3] rounded-xl py-7">
         <div className="flex justify-center items-center">
         <img 
            src={image}
            alt="Book"
            />
         </div>
        </div>
        <div className="card-body  px-0">
          <div >
            <button className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 rounded-full ">{tags[0]}</button>
            <button className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 ml-3 rounded-full ">{tags[1]}</button>
          </div>
          <h2 className="text-[#131313] font-bold text-2xl">{bookName}</h2>
          <p className="text-[#131313CC] font-medium pt-2">By : {author}</p>
          <div className="border my-4 border-[#13131321] border-dashed"></div>
         <div className="flex justify-between">
            <div>
                <p className="text-[#131313CC] font-medium">{category}</p>
            </div>
            <div>
            <p className="flex gap-2 items-center font-medium">{rating} <FaRegStar></FaRegStar></p>
            </div>
         </div>
        </div>
      </Link>
    );
};

export default BooksCard;
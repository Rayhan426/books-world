import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Wishlist = ({wishlistBook}) => {

    const {bookId,bookName,image,author,yearOfPublishing,tags,publisher,category,rating, totalPages} = wishlistBook;

    return (
     <div className="flex lg:flex-row flex-col gap-6 justify-start border mb-3 p-2 rounded border-[#13131326]">
        <div className="bg-[#F3F3F3] rounded-xl  px-10 flex items-center justify-center">
      <img  className="w-[125px]"
         src={image}
         alt="Book"
         />
     </div>
        <div className="space-y-3 w-full">

         <h2 className="text-[#131313] font-bold lg:text-2xl text-xl">{bookName}</h2>
         <p className="text-[#131313CC] font-medium ">By: {author}</p>

         <div className="flex lg:flex-row flex-col ">
             <p className=" flex items-center gap-2"><span className="font-bold">Tag:</span> <span className="text-[#23BE0A] bg-[#23BE0A0D] font-medium lg:px-4 px-3 py-2 rounded-full">#{tags[0]}</span>  <span className="text-[#23BE0A] bg-[#23BE0A0D] font-medium lg:px-4 px-3 py-2 rounded-full">#{tags[1]}</span></p>
             <p className="flex items-center gap-2 ml-0 lg:ml-3 text-[#131313CC] "><span><CiLocationOn></CiLocationOn></span>Years Of Publishing: {yearOfPublishing}</p>
         </div>

        <div className="flex lg:flex-row flex-col gap-4 pb-3">
        <p className="text-[#13131399] flex items-center gap-2"><GoPeople></GoPeople> Publisher: {publisher}</p>
        <p className="text-[#13131399] flex items-center gap-2"><IoReaderOutline></IoReaderOutline> Page {totalPages}</p>
        </div>

         <div className="border border-[#13131326]">

         </div>
        {/* buttn */}
        <div className="flex lg:flex-row flex-col gap-3 items-center pt-3">
         <button  className="px-5 py-[11px] rounded-full text-[#328EFF] bg-[#328EFF26]">Category: {category}</button>
         <button className="px-5 py-[11px] rounded-full text-[#FFAC33] bg-[#FFAC3326] ">Rating: {rating}</button>
         <Link to={`/books/${bookId}`} className="px-5 py-[11px] rounded-full text-white bg-[#23BE0A]">View Details</Link>
        </div>

        </div>

     </div>
    );
};

export default Wishlist;

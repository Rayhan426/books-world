import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoReaderOutline } from "react-icons/io5";


const ReadBooks = ({readBook}) => {
   
    const {bookName,image,author,yearOfPublishing,tags,publisher,category,rating, totalPages} = readBook;

    return (
        <div className="flex gap-6 justify-start border p-3 rounded border-[#13131326]">
           <div className="bg-[#F3F3F3] rounded-xl  px-10 flex items-center justify-center">
         <img  className="w-[125px]"
            src={image}
            alt="Book"
            />
        </div>
           <div className="space-y-3 w-full">

            <h2 className="text-[#131313] font-bold text-2xl">{bookName}</h2>
            <p className="text-[#131313CC] font-medium ">By: {author}</p>

            <div className="flex gap-2">
                <p className=" "><span className="font-bold">Tag:</span> <span className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 ml-3 rounded-full">#{tags[0]}</span>  <span className="text-[#23BE0A] bg-[#23BE0A0D] font-medium px-4 py-2 ml-3 rounded-full">#{tags[1]}</span></p>
                <p className="flex items-center gap-2 text-[#131313CC] "><span><CiLocationOn></CiLocationOn></span>Years Of Publishing: {yearOfPublishing}</p>
            </div>

           <div className="flex gap-4 pb-3">
           <p className="text-[#13131399] flex items-center gap-2"><GoPeople></GoPeople> Publisher: {publisher}</p>
           <p className="text-[#13131399] flex items-center gap-2"><IoReaderOutline></IoReaderOutline> Page {totalPages}</p>
           </div>

            <div className="border border-[#13131326]">

            </div>
           {/* buttn */}
           <div className="flex gap-3 items-center pt-3">
            <button  className="px-5 py-[11px] rounded-full text-[#328EFF] bg-[#328EFF26]">Category: {category}</button>
            <button className="px-5 py-[11px] rounded-full text-[#FFAC33] bg-[#FFAC3326] ">Rating: {rating}</button>
            <button className="px-5 py-[11px] rounded-full text-white bg-[#23BE0A]">View Details</button>
           </div>

           </div>

        </div>
    );
};

export default ReadBooks;
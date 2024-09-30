
import { Link } from "react-router-dom";
import placeholderBook from "../assets/images/book5.png";
import ListedBooks from "../components/ListedBooks";

const Banner = () => {
  
    return (
        <div className="bg-[#1313130D] lg:px-32 lg:py-20 py-20 rounded-lg my-12">
            <div className="flex lg:flex-row flex-col-reverse gap-2 items-center justify-between ">
               <div>
               <h1 className="font-bold lg:text-5xl text-4xl mb-12 leading-none "><span className="leading-tight">Books to freshen up <br />your bookshelf</span></h1>
               <Link to={'/listed-book'}  className="px-6 py-5 rounded-lg  bg-[#23BE0A] text-white font-bold">View The List</Link>
               </div>
                <div>
                <img src={placeholderBook} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default Banner;
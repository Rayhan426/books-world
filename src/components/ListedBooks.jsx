import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {

    const [tabIndex, setTabIndex] = useState(0);

    
    return (
        <div className="">

            <div className="bg-[#1313130D] my-9 rounded-xl p-10">
            <h2 className="text-[#131313] font-bold text-3xl text-center">Books</h2>
            </div>


 <div className=" w-full flex justify-center">
 <details className="dropdown mb-14">
  <summary className="btn m-1 bg-[#23BE0A] hover:bg-green-700 text-white ">Sort By <span><IoIosArrowDown></IoIosArrowDown></span></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</details>
 </div>


            {/* tabs start */}
            <div className="flex p-4 border items-center flex-nowrap  w-full ">
	<Link onClick={()=> setTabIndex(0)} to={''} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  border-[#1313134D] ${tabIndex === 0 ? 'border border-b-0 ' : 'border-b'}`}>
		<span className={`${tabIndex === 0 ? 'text-gray-900 font-semibold' : 'text-[#13131380]'}`}>Read Books</span>
	</Link>
	<Link onClick={()=> setTabIndex(1)} to={''} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-r-none  rounded-t-lg  border-[#1313134D] ${tabIndex === 1 ? 'border border-b-0 border-r-0' : 'border-b'}`}>
		<span className={`${tabIndex === 1 ? 'text-gray-900 font-semibold' : 'text-[#13131380]'}`}>Wishlist Books</span>
	</Link>
	
</div>
            {/* tabs end */}
        </div>
    );
};

export default ListedBooks;
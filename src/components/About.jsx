import { Link } from 'react-router-dom';
import placeholderImg from '../assets/images/about book.png'

const About = () => {
    return (
        <div className="mt-14">
      <div className="bg-blue-100 rounded-lg py-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center">About Us</h1>
      </div>


      <div className='flex lg:flex-row flex-col justify-between items-center gap-7'>
        <div className=''>
            <img src={placeholderImg} alt="" />
        </div>
        <div className='w-2/3'>
            <p className='text-[#131313D9] text-lg '>Welcome to <span className="font-bold">Books World</span>, the ultimate destination for book lovers! Whether you’re an avid reader, casual explorer, or just starting your reading journey, we’ve built this platform to help you discover, organize, and enjoy books in a way that fits your unique style. 
            Our mission is simple: to connect readers with stories they love. At <span className="font-bold">Books World</span>, you can create personal book lists, track your reading progress, and explore recommendations based on your tastes. Whether you're looking for your next great read, managing a wishlist, or revisiting your favorite books, we make the process easy and enjoyable.

        With tools that allow you to visualize your reading habits and share reviews, we aim to build a community of passionate readers who inspire each other. Join us and dive into the world of books like never before!

Happy Reading! 
 <span className=" ml-1 font-bold">Books World.</span></p>

<div className='flex lg:justify-end justify-center mt-4'>
<Link to={'/'} className='text-white hover:bg-black hover:scale-100 duration-300 bg-violet-600 px-5 py-3 rounded-lg font-bold'>Explore Books</Link>
</div>
        </div>
      </div>
        </div>
    );
};

export default About;
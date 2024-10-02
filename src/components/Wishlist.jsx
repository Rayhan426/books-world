


const Wishlist = ({wishlistBook}) => {

    const {yearOfPublishing} = wishlistBook
    return (
        <div>
            <h3>Wishlist Books</h3>
            <h1 className="text-red-500">{yearOfPublishing}</h1>
           
        </div>
    );
};

export default Wishlist;

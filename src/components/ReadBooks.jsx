


const ReadBooks = ({readBook}) => {
   
    const {category} = readBook;

    return (
        <div>
            <h3>Read Books</h3>
            <h1 className="text-green-400">{category}</h1>

        </div>
    );
};

export default ReadBooks;
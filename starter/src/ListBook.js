import ShelfChanger from "./ShelfChanger";

const ListBook = ({ listBook}) => {
  const renderBookByShelf = (type) => {
    const bookOfShelf = listBook.filter((book) => book.shelf === type);
    return (
      <div>
        {type === "currentlyReading" && (
          <h2 className="bookshelf-title">Currently Reading</h2>
        )}
        {type === "wantToRead" && (
          <h2 className="bookshelf-title">Want to Read</h2>
        )}
        {type === "read" && (
          <h2 className="bookshelf-title">Read</h2>
        )}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookOfShelf.map((book, index) => (
              <li key={index}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks
                            ? book.imageLinks.smallThumbnail
                            : "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                        })`,
                      }}
                    ></div>
                    <ShelfChanger
                      book={book}
                    />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  return (
    <div className="list-books-content">
      {renderBookByShelf("currentlyReading")}
      {renderBookByShelf("wantToRead")}
      {renderBookByShelf("read")}
    </div>
  );
};

export default ListBook;

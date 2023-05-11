function findAuthorById(authors, id) {
  return authors.find(auth => auth.id == id);
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id == id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => book.borrows.some(borrow => borrow.returned === false));
  let returnedBooks = books.filter((book) => book.borrows.every(borrow => borrow.returned === true));

  let finalArr = [borrowedBooks,returnedBooks];
  return finalArr;
}

function getBorrowersForBook(book, accounts) {
   let accts= book.borrows.map((borrow) => {
     let account = accounts.find(account => account.id === borrow.id);
     return{...borrow, ...account};
   });
  let firstTen = accts.slice(0,10);
  
  return firstTen;
    }
  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

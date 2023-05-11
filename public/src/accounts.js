function findAccountById(accounts, id) {
  let account = accounts.find(acct => acct.id === id);
  return account;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((acctA, acctB) => (acctA.name.last > acctB.name.last ? 1 : -1));
return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  
let allBorrows =[];

books.forEach(book =>{
   allBorrows = [...allBorrows,...book.borrows];
});
//   let count = 0;
//   allBorrows.forEach((book) => {
//     if(account.id === book.id){
//       count++;
//     }
//   });
  let filterCount = allBorrows.filter(book => {
    return account.id === book.id
  });
  return filterCount.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  //books with author objects embedded
let allBorrows =[];

books.forEach(book =>{
   allBorrows = [...allBorrows,...book.borrows];
});
  let withoutAuthors = books.filter(book => {
    return book.borrows.some(borrow => borrow.id == account.id && borrow.returned == false); 
  });
  

  
  withoutAuthors.forEach(book => {
    book.author = authors.find(author => book.authorId == author.id);
  })
  
  return withoutAuthors;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

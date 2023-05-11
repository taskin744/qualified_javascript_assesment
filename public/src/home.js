function getTotalBooksCount(books) {
let sum = 0;
  
  for(let i=0; i<books.length; i++){
    sum ++;
  }
 return books.length === 0 ? 0 : sum;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let allBorrows =[];
  books.forEach(book =>{
   allBorrows = [...allBorrows,...book.borrows];
});
  let borrowedArr = allBorrows.filter(borrow => borrow.returned === false);
  return borrowedArr.length;
}

function getMostCommonGenres(books) {
  const map = books.reduce((acc, e) => acc.set(e.genre, (acc.get(e.genre) || 0) + 1), new Map());
 
 let finalArr = ([...map.entries()]);

//   let sortedArr = finalArr.sort();
  let sortedArray = finalArr.sort((a, b) => {
  return b[1] - a[1];
});
  let mostPopularfive = sortedArray.slice(0,5);
  let finalistArray = [];
  
  mostPopularfive.forEach(arr => {
     finalistArray.push({name : arr[0], count : arr[1]});
  })
  
  //console.log(finalArr);
  return finalistArray;
}

function getMostPopularBooks(books) {
  let popularBooks = [];
   const map = books.reduce((acc, book) => {
    popularBooks.push({ name: book.title, count: book.borrows.length });
  }, []);
  let sortedArray = popularBooks.sort((a, b) => {
  return b[1] - a[1];
});
  let mostPopularFive = sortedArray.slice(0,5);
  
//   const map = books.reduce((acc, book) => acc.set(book.authorId, (acc.get(book.authorId) || 0) + 1), new Map());
 
//  let countedArr = ([...map.entries()]);
//   let sortedArray = countedArr.sort((a, b) => {
//   return b[1] - a[1];
// });
//   let mostPopularFive = sortedArray.slice(0,5);
//   console.log(mostPopularFive);
//    let finalistArray = [];
  
//   mostPopularFive.forEach(arr => {
//      finalistArray.push({name : arr[0], count : arr[1]});
//   })
  return popularBooks.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5);
}


 function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  let authorNames = [];
  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    
    let count = 0;  
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
     
    }
     const authorObject = { name: authorName, count: count };  
     popularAuthors.push(authorObject);
     }
   return popularAuthors.sort((countA, countB) => (countA.count < countB.count ? 1 : -1)).slice(0, 5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

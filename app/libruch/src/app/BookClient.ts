"use client"

// export async function queryBook(isbn: string): Promise<Book> {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${parseInt(isbn)}`)
//     .then(x => x.json())
//     .then(bookDTO => {
//       if(bookDTO.totalItems == 0){
//         return Promise.reject("Book Not Found")
//       }
//
//       let book = bookDTO.items[0].volumeInfo;
//
//       return {
//         isbn: isbn,
//         title: book.title,
//         author: book.authors.join(", ")
//       }
//     })
// }

let baseUrl = process.env.BASE_URL ?? "http://localhost"

export async function queryBook(isbn: string): Promise<Book> {
  return fetch(`/api/books/${parseInt(isbn)}`)
    .then(x => x.json())
}

export async function saveBook(isbn: string) {
  return fetch(`/api/library/${isbn}`, {method: "PUT", credentials: "include"}).then(x => x.statusText)
}

export type Book = {
  isbn: string,
  title: string,
  author: string
}
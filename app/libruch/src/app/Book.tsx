import {Book as BookType} from "@/app/BookService";

export const Book = (props: { book: BookType }) => {
  return <div>
    <div>Book</div>
    <div>title: {props.book.title ?? "???"}</div>
    <div>isbn: {props.book.isbn ?? "???"}</div>
    <div>author: {props.book.author ?? "???"}</div>
  </div>
}
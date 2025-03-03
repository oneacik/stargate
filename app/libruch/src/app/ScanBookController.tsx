"use client"
import React, {useState} from "react";
import {Book, queryBook} from "./BookClient"

export const ScanBookController = (props: {
  also?: (book: Book) => Promise<void>,
  children: (book: Book, queryIsbn: (isbn: string) => void) => React.ReactElement
}) => {
  let [book, setBook] = useState({
    isbn: "???",
    title: "???",
    author: "???"
  })

  return <>
    {props.children(
      book,
      (isbn) => queryBook(isbn)
        .then(book => (setBook(book), book))
        .then(book => props?.also(book))
        .catch(alert)
    )
    }
  </>
}
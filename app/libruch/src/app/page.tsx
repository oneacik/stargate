"use client"
import styles from "./page.module.css";
import {FullScreen} from "layout/FullScreen";
import {VerticalCentered} from "layout/VerticalCentered";
import {Tile} from "layout/Tile";
import {Book} from "@/app/Book";
import React from "react";
import {ReactCamera} from "@/app/ReactCamera";
import {ScanBookController} from "@/app/ScanBookController";
import {AuthenticationController} from "@/app/AuthenticationController";
import {LoginForm} from "@/app/LoginForm";
import {saveBook} from "@/app/BookService";
import {SpreadSheet} from "@/app/SpreadSheet";


export default function Home() {
  return (
    <div className={styles.page}>
      <FullScreen className={"fullscreen"}>
        <SpreadSheet></SpreadSheet>
        <VerticalCentered>
          <AuthenticationController>
            {(token, authenticate) => [
              <LoginForm callback={authenticate}></LoginForm>,
              <ScanBookController also={(book) => (saveBook(token, book.isbn), null)}>
                {(book, updateBook) =>
                  <>
                    <Tile>
                      <ReactCamera onScan={(book: string) => updateBook(book)}></ReactCamera>
                    </Tile>
                    <Tile>
                      <Book book={book}></Book>
                    </Tile>
                  </>
                }
              </ScanBookController>
            ]}
          </AuthenticationController>

        </VerticalCentered>
      </FullScreen>
    </div>
  );
}

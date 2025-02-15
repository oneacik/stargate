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
import {saveBook} from "@/app/BookClient";
import {SpreadSheet} from "@/app/SpreadSheet";
import {authenticate, register} from "@/app/AuthenticationClient";


export default function Home() {
  return (
    <div className={styles.page}>
      <FullScreen className={"fullscreen"}>
        <SpreadSheet></SpreadSheet>
        <VerticalCentered>
          <AuthenticationController fetchAuthentication={authenticate}>
            {(token) => [
              <>
                <LoginForm callback={register}></LoginForm>
                <Tile>
                  Use this app to scan barcodes of your books for sharing them with the rest of the world.
                  Privacy Warning: Your email will be visible next to your scanned books in open google spreadsheet.
                  Works acceptable in good lighting on mobile phone.
                  <br/>
                  <br/>
                  For any inquiries use <a href={"https://www.linkedin.com/in/piotr-suwa%C5%82a-928b1817a/"}><u>linkedin</u></a>.
                </Tile>
              </>,

              <ScanBookController also={(book) => (saveBook(book.isbn), null)}>
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

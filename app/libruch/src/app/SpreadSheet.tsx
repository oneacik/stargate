import {Book as BookType} from "@/app/BookService";
import styled from "styled-components";

export const SpreadSheet = () => {
  return <FloatingItem>
    <a href={"/api/spreadsheet"}><img alt="spread" src={"/app/sheets.png"}/></a>
  </FloatingItem>
}

const FloatingItem = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 50%;

  width: 5rem;
  height: 5rem;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
  }
`
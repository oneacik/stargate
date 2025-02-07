import React, {useRef} from "react";
import {Tile} from "layout/Tile";

export const LoginForm = ({callback} : {callback: (text: string) => void}) => {
  const ref = useRef()

  return <Tile>
    <form onSubmit={(ev) => {
      ev.preventDefault();
      // @ts-ignore
      callback(ref.current!.value)
    }}>
      <Tile><input ref={ref} style={{width: "100%", height: "2rem", padding: "1rem"}} placeholder={"email@email.com"} type={"text"}></input></Tile>
      <Tile>
        <button style={{width: "100%", height: "2rem"}} type={"submit"}>ZALOGUJ</button>
      </Tile>
    </form>
  </Tile>
}
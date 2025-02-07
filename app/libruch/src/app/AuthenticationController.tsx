import React, {useState} from "react";


export const AuthenticationController = (
  {children, fetchAuthentication}: {
    children: (token: string | null, authenticate: (token: string) => void) => [React.ReactElement, React.ReactElement]
    fetchAuthentication?: () => string

  }
) => {
  const [token, setToken] = useState(fetchAuthentication!! ? fetchAuthentication() : null)

  return children(token, setToken)[token!! ? 1 : 0]
}
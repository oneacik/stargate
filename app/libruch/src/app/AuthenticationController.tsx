import React, {useEffect, useState} from "react";


export const AuthenticationController = (
  {children, fetchAuthentication}: {
    children: (token: string | null) => [React.ReactElement, React.ReactElement]
    fetchAuthentication: () => Promise<string | null>
  }
) => {
  const [token, setToken] = useState(null)

  let authenticate = () => fetchAuthentication().then(token => (token != null && setToken(token), null))

  useEffect(() => {
    authenticate()
    let timer = setInterval(authenticate, 1000)
    return () => clearInterval(timer)
  }, [])

  return children(token)[token!! ? 1 : 0]
}
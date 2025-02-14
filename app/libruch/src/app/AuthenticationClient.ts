"use client"

let baseUrl = process.env.BASE_URL ?? "http://localhost"

export function register(email: string): Promise<number> {
  return fetch(`/api/login/challenge/${email}`, {method: "POST"})
    .then(x => x.status).then(x => (alert("Check Inbox"), x))
}

export function authenticate(): Promise<string | null> {
  return fetch(`/api/login/email`, {credentials: "include"})
    .then(x => (x.status == 401 && null) || x.text())
    .then(x => (console.log(x), x))
}
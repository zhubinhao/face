export type Tmethod = "POST" | "OPTIONS" | "GET" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined
export type Ticon = "none" | "success" | "loading" | undefined
export interface iIshare {
  title: string
  path: string
}

export interface Iobj {
  [key: string]: any
}
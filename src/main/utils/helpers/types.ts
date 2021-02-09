export type ResponseData = {
  message?: string | any[],
  valid?: boolean,
  invalid?: boolean
}

export type Field = {
  [key: string]: any
}

export type Schema = {
  [key: string]: any
}

export type Body = {
  [key: string]: any
}

export type Validation = {
  invalid: boolean,
  message: string
}

export type Object = {
  [key: string]: any
}
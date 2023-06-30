export type Store = {
  name: string,
  category: string,
  employees: string[],
}

export type ProductData = {
  title: string,
  category: string,
  price: number|string,
  employee: string,
  description: string,
  reviews: string[],
}

export type Product = {
  id: string,
  data: ProductData
}

export type ProductResponse = {
  list: Product[],
  length: number,
}

export type Pagination = {
  page: number,
  elements: number
}

export type ModalState = {
  show: string,
  product: Product | null,
}

export type FormInputs = {
  title: string,
  category: string,
  price: number,
  employee: string,
  description: string,
  reviews: { value: string }[],
}

export type ErrorResponse = {
  error: string,
  status: number,
}

export type RouterError = {
  statusText?: string,
  message: string,
}

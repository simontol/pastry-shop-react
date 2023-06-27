export type Store = {
  name: string,
  category: string,
  employees: string[],
}

export type Product = {
  id: string,
  data: {
    title: string,
    category: string,
    price: number,
    employee: string,
    description: string,
    reviews?: string[],
  }
}

export type ProductResponse = {
  list: Product[],
  length: number,
}

export type Pagination = {
  page: number,
  elements: number
}


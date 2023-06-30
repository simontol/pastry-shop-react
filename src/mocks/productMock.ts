import { Product } from '../app/redux/types';

export const productMock: Product = {
  id: 'productId',
  data: {
    title: 'title',
    category: 'category',
    description: 'description',
    price: 10,
    employee: 'employee',
    reviews: [],
  },
};

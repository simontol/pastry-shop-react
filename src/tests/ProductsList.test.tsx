import { render } from '@testing-library/react';
import ProductsList from '../app/components/ProductsList';
import { productMock } from '../mocks/productMock';

jest.mock('react-redux', () => ({
  useSelector: () => ({ show: 'DeleteModal', product: productMock }),
  useDispatch: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../app/redux/storeApi', () => ({
  useProductsQuery: () => ({ data: { list: [productMock] }, isLoading: false }),
}));

describe('ProductsList tests', () => {
  it('should be displayed and contain product title', () => {
    const { container } = render(<ProductsList />);
    expect(container).toBeInTheDocument();
    const titleEl = container.getElementsByClassName('product__card__title');
    expect(titleEl[0]).toHaveTextContent(productMock.data.title);
  });
});

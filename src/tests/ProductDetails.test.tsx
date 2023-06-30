import { render } from '@testing-library/react';
import ProductDetails from '../app/components/ProductDetails';
import { productMock } from '../mocks/productMock';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useParams: () => ({ id: productMock.id }),
}));

jest.mock('../app/redux/storeApi', () => ({
  useProductByIdQuery: () => ({ data: productMock.data }),
}));

describe('ProductCard tests', () => {
  it('should be displayed and contain title', () => {
    const { container } = render(<ProductDetails />);
    expect(container).toBeInTheDocument();
    const titleEl = container.getElementsByClassName('product__details__title');
    expect(titleEl[0]).toHaveTextContent(productMock.data.title);
  });
});

import { render } from '@testing-library/react';
import ProductCard from '../app/components/ProductCard';
import { productMock } from '../mocks/productMock';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ProductCard tests', () => {
  it('should be displayed and contain title', () => {
    const { container } = render(<ProductCard product={ productMock } />);
    expect(container).toBeInTheDocument();
    const titleEl = container.getElementsByClassName('product__card__title');
    expect(titleEl[0]).toHaveTextContent(productMock.data.title);
  });
});

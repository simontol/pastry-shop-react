import { render } from '@testing-library/react';
import DeleteModal from '../app/components/DeleteModal';
import { productMock } from '../mocks/productMock';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({ show: 'DeleteModal', product: productMock }),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../app/redux/storeApi', () => ({
  useDeleteProductMutation: () => [jest.fn(), {}],
}));

describe('DeleteModal tests', () => {
  it('should be displayed', () => {
    const { container } = render(<DeleteModal />);
    expect(container).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import PageWrapper from '../app/components/PageWrapper';
import { storeMock } from '../mocks/storeMock';

jest.mock('../app/redux/storeApi', () => ({
  useDeleteProductMutation: () => [jest.fn(), {}],
  useStoreQuery: () => ({ data: storeMock }),
  api: { endpoints: { products: { select: () => ({ error: {} }) } } },
}));

jest.mock('react-redux', () => ({
  useSelector: () => ({ error: {} }),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Outlet: () => 'mocked outlet',
}));

describe('PageWrapper tests', () => {
  it('should be displayed', () => {
    const { container } = render(<PageWrapper />);
    expect(container).toBeInTheDocument();
    const heading = screen.getByText(/store name/i);
    expect(heading).toBeInTheDocument();
  });
});

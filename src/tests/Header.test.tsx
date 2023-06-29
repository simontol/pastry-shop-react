import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';
import { Store } from '../app/redux/types';

const store: Store = {
  name: 'store name',
  category: 'category',
  employees: ['Pippo'],
};

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Header tests', () => {
  it('should contains the heading title', () => {
    render(<Header store={ store } />);
    const heading = screen.getByText(/store name/i);
    expect(heading).toBeInTheDocument();
  });
});

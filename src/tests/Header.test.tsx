import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header';
import { storeMock } from '../mocks/storeMock';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Header tests', () => {
  it('should contains the heading title', () => {
    render(<Header store={ storeMock } />);
    const heading = screen.getByText(/store name/i);
    expect(heading).toBeInTheDocument();
  });
});

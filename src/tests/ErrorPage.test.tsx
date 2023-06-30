import { render, screen } from '@testing-library/react';
import ErrorPage from '../app/components/ErrorPage';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useRouteError: () => ({ statusText: 'Page Not found' }),
}));

describe('ErrorPage tests', () => {
  it('should display error page', () => {
    render(<ErrorPage />);
    const error = screen.getByText(/Page Not found/);
    expect(error).toBeInTheDocument();
  });
});

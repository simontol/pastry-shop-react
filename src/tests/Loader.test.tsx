import { render } from '@testing-library/react';
import Loader from '../app/components/Loader';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useRouteError: () => ({ statusText: 'Page Not found' }),
}));

describe('ErrorPage tests', () => {
  it('should display loader image', () => {
    const { container } = render(<Loader loading />);
    const div = container.querySelector('div');
    expect(div).toHaveClass('loading');
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
  });
  it('should NOT have class "loading"', () => {
    const { container } = render(<Loader loading={ false } />);
    const div = container.querySelector('div');
    expect(div).not.toHaveClass('loading');
  });
});

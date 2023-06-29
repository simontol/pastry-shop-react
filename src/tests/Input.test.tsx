import { render } from '@testing-library/react';
import Input from '../app/components/Input';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    control: () => ({}),
    register: () => ({}),
    formState: { errors: {} },
  }),
}));

describe('Input tests', () => {
  it('should contains the input of type text', () => {
    const { container } = render(<Input name='title' />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });
  it('should contains the input of type number', () => {
    const { container } = render(<Input name='title' type='number' />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'number');
  });
});

import { render } from '@testing-library/react';
import InputSelect from '../app/components/InputSelect';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    control: () => ({}),
    register: () => ({}),
    formState: { errors: {} },
  }),
}));

jest.mock('../app/redux/storeApi', () => ({
  useStoreQuery: () => ({ data: { employees: ['John'] } }),
}));

describe('InputSelect tests', () => {
  it('should contains option with value John', () => {
    const { container } = render(<InputSelect />);
    const select = container.querySelector('select');
    expect(select).toBeInTheDocument();
    const option = container.querySelector('option');
    expect(option).toBeInTheDocument();
    expect(option).toHaveAttribute('value', 'John');
  });
});

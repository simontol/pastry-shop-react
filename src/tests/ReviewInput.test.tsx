import { render } from '@testing-library/react';
import ReviewInput from '../app/components/ReviewInput';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    control: () => ({}),
    register: () => ({}),
    formState: { errors: {} },
  }),
  useFieldArray: () => ({
    fields: [{ value: 'John' }],
    append: jest.fn(),
    remove: jest.fn(),
  }),
}));

describe('ReviewInput tests', () => {
  it('should be displayed and contain title', () => {
    const { container } = render(<ReviewInput />);
    expect(container).toBeInTheDocument();
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    const fieldEl = container.getElementsByClassName('input__reviews__field');
    expect(fieldEl).toHaveLength(1);
  });
});

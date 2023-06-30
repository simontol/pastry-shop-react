import { render } from '@testing-library/react';
import ProductForm from '../app/components/ProductForm';

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    control: () => ({}),
    register: () => ({}),
    formState: { errors: {} },
    handleSubmit: () => ({}),
    reset: () => ({}),
  }),
  FormProvider: () => 'form provider',
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

jest.mock('../app/redux/storeApi', () => ({
  useNewProductMutation: () => [jest.fn(), { isSuccess: true }],
}));

describe('ProductForm tests', () => {
  it('should be displayed and contain title', () => {
    const { container } = render(<ProductForm />);
    expect(container).toBeInTheDocument();
    const titleEl = container.getElementsByClassName('product-form__title');
    expect(titleEl[0]).toHaveTextContent('Create new product');
  });
});

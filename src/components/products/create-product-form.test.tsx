import { render, screen } from '@testing-library/react';
import CreateProductForm from '@/components/products/create-product-form';

jest.mock('@/ui/input/input', () => {
  const input = (props: React.ComponentProps<'input'> & { name: string }) => (
    <input data-testid={`input-${props.name}`} {...props} />
  );
  input.displayName = 'MockInput';
  return input;
});

jest.mock('@/ui/upload-image-input/upload-image-input', () => {
  const upload_image_input = () => <div data-testid="upload-image-input" />;
  upload_image_input.displayName = 'MockUploadImageInput';
  return upload_image_input;
});

jest.mock('@/ui/header-title/header-title', () => {
  const header_title = ({ title }: { title: string }) => (
    <h1 data-testid="header-title">{title}</h1>
  );
  header_title.displayName = 'MockHeaderTitle';
  return header_title;
});

jest.mock('../submit-button/submit-button', () => {
  const submit_button = () => <button type="submit">Submit</button>;
  submit_button.displayName = 'MockSubmitButton';
  return submit_button;
});

describe('<CreateProductForm />', () => {
  it('renders form with all fields', () => {
    render(<CreateProductForm />);
    expect(screen.getByTestId('header-title')).toHaveTextContent(
      'create new product',
    );
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-description')).toBeInTheDocument();
    expect(screen.getByTestId('input-price')).toBeInTheDocument();
    expect(screen.getByTestId('upload-image-input')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});

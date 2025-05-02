import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCardType } from '@/models/product.model';
import ProductCardTypeContainerButton from './product-card-type-container-button';

const mock_props = {
  label: ProductCardType.Compact,
  product_type: ProductCardType.Compact,
  onClick: jest.fn(),
};

describe('<ProductCardTypeContainerButton />', () => {
  it('renders the label', () => {
    render(<ProductCardTypeContainerButton {...mock_props} />);
    expect(
      screen.getByRole('button', { name: /compact/i }),
    ).toBeInTheDocument();
  });

  it('applies active styles when selected', () => {
    render(<ProductCardTypeContainerButton {...mock_props} />);
    const button = screen.getByRole('button', { name: /compact/i });
    expect(button).toHaveClass('bg-yellow');
  });

  it('does not apply active styles when not selected', () => {
    render(
      <ProductCardTypeContainerButton
        {...mock_props}
        product_type={ProductCardType.Default}
      />,
    );
    const button = screen.getByRole('button', { name: /compact/i });
    expect(button).not.toHaveClass('bg-yellow');
  });

  it('calls onClick when clicked', () => {
    render(<ProductCardTypeContainerButton {...mock_props} />);
    const button = screen.getByRole('button', { name: /compact/i });
    fireEvent.click(button);
    expect(mock_props.onClick).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from '@testing-library/react';
import { mock_product } from '@/constants/product.constant';
import ProductCard from '@/components/product-card/product-card';
import { ProductModel } from '@/models/product.model';

jest.mock('@/components/product-card-type', () => ({
  ProductCardDefault: (product: ProductModel) => (
    <div data-testid="product-default">Default Card: {product.name}</div>
  ),
  ProductCardCompact: (product: ProductModel) => (
    <div data-testid="product-compact">Compact Card: {product.name}</div>
  ),
}));

describe('<ProductCard />', () => {
  it('renders default product card when no card_type is specified', () => {
    render(<ProductCard product={mock_product} />);
    expect(screen.getByTestId('product-default')).toBeInTheDocument();
    expect(screen.queryByTestId('product-compact')).not.toBeInTheDocument();
  });

  it('renders compact product card when card_type is "compact"', () => {
    render(<ProductCard product={mock_product} card_type="compact" />);
    expect(screen.getByTestId('product-compact')).toBeInTheDocument();
    expect(screen.queryByTestId('product-default')).not.toBeInTheDocument();
  });
});

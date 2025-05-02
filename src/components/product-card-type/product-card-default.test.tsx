import { render, screen } from '@testing-library/react';
import { mock_product } from '@/constants/product.constant';
import ProductCardDefault from './product-card-default';

/* eslint-disable @next/next/no-img-element */
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    return <img alt="test" {...props} />;
  },
}));

describe('<ProductCardDefault />', () => {
  it('renders product name, description, price, and image', () => {
    render(<ProductCardDefault product={mock_product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('$1,234.56')).toBeInTheDocument();
    const image = screen.getByAltText(/test product image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mock_product.image_url);
  });
});

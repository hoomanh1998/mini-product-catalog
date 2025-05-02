import { render, screen } from '@testing-library/react';
import { mock_product } from '@/constants/product.constant';
import ProductCardCompact from './product-card-compact';

/* eslint-disable @next/next/no-img-element */
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    return <img alt="test" {...props} />;
  },
}));

describe('<ProductCardCompact />', () => {
  it('renders product name, description, price, and image', () => {
    render(<ProductCardCompact product={mock_product} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('$1,234.56')).toBeInTheDocument();
    const image = screen.getByAltText(/test product image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mock_product.image_url);
  });
});

import { render, screen } from '@testing-library/react';
import EmptyProudctList from './empty-products-list';

describe('<EmptyProudctList />', () => {
  it('renders the provided message', () => {
    render(<EmptyProudctList message="No products found" />);
    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });

  it('applies default styles', () => {
    render(<EmptyProudctList message="Empty list" />);
    const element = screen.getByText(/empty list/i);
    expect(element).toHaveClass(
      'w-full',
      'p-10',
      'text-sm',
      'border',
      'rounded-2xl',
      'border-foreground/10',
      'text-center',
    );
  });

  it('accepts and applies custom className', () => {
    render(
      <EmptyProudctList message="Nothing here" className="text-red-500" />,
    );
    const element = screen.getByText(/nothing here/i);
    expect(element).toHaveClass('text-red-500');
  });

  it('spreads additional props like data-testid', () => {
    render(
      <EmptyProudctList message="Empty" data-testid="empty-product-box" />,
    );
    expect(screen.getByTestId('empty-product-box')).toBeInTheDocument();
  });
});
